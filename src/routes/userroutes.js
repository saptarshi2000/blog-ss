const express  = require('express')

const router = express.Router()
const signup = require('./signup')
const login  = require('./login')
const post  = require('./post')
router.use('/signup',signup)
router.use('/login',login)
router.use('/post',post)
module.exports = router