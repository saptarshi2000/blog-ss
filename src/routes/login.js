const express = require('express')
const bcryptjs = require('bcryptjs')
const { body, validationResult } = require("express-validator")
const jwt = require('jsonwebtoken')

const User = require("../model/user")


const router = express.Router()

router.post('/', [body('email').isEmail().normalizeEmail(), body('password', "please enter a password").isLength({ max: 16, min: 6 })], async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const err = validationResult(req)
    if (req.body.token != null ) {
        try {
                jwt.verify(req.body.token, "privatekey", (err, user) => {
                if (err) return res.json(err)
                return res.json(user)
            })
        } catch (e) {
            res.send(e)
        }

    } else {
        if (!err.isEmpty()) {
            const errror = err.array()[0].msg
            return res.status(404).json({})
        }
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({})
        }

        try {
            if (await bcryptjs.compare(password, user.password)) {
                const payload = {
                    _id: user._id,
                    email: email
                }
                var username = user.username
                const token = jwt.sign(payload, "privatekey", { expiresIn: '10d' });

                await user.updateOne({ $set: { token: token } }).exec()

                console.log(user)
                console.log(token)
                res.status(200).json({ token: username })
            } else {
                res.status(400).json({})
            }
        } catch (e) {
            res.status(500).json({})
        }
    }

})

module.exports = router