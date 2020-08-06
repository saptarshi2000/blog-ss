const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    post_by: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
        default:""
    },
    post_at: {
        type: Date,
        require: true,
        default: Date.now()
    },
    active: {
        type: Boolean,
        require: true,
        default: true
    },
    fav_count:{
        type:Number,
        require: true,
        default: 0
    },
    comment_count:{
        type:Number,
        require: true,
        default: 0
    }
})