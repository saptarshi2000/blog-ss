const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        require: true,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        require: true,
        default: Date.now()
    },
    active: {
        type: Boolean,
        require: true,
        default: true
    },
    token:{
        type: String,
    }
})

module.exports = mongoose.model("user", userSchema)