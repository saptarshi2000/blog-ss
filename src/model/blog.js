const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    post_by: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    post_at: {
        type: Date,
        require: true,

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