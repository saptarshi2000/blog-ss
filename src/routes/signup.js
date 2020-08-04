const express = require('express')
const bcryptjs = require('bcryptjs')
const {body,validationResult} = require("express-validator")

const User = require("../model/user")


const router = express.Router()

router.post('/',[body('email',"enter a email").isEmail().normalizeEmail(),body('password',"please enter a password").isLength({max:16,min:6})],async(req,res)=>{
    const err = await validationResult(req)
    if(!err.isEmpty()){
        const error = err.array()[0].msg
        res.status(400).send(error)
    }
    const email = req.body.email
    const chkuser = await User.findOne({email})

    if(chkuser){
        return res.status(412).json({'signup':'user already exist'})
    }
    try{
        const salt = await bcryptjs.genSalt()
        const hashedpassword = await bcryptjs.hash(req.body.password,salt)
        var user = new User({
            email:req.body.email,
            username:req.body.username,
            password:hashedpassword
        })
        await user.save().then(()=>{
            console.log(user)
            //next()
            res.status(201).send()
        })
    }catch(e){
        res.status(500)
        console.log(e)
    }
})

module.exports = router