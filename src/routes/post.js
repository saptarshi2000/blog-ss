const express =  require('express')

const router =  express.Router()
const Post  = require("../model/blog")
router.post('/',async(req,res)=>{
    try{
        var post = new Post({
            post_by:req.body.username,
            body:req.body.post,
            image:req.body.imageurl
        })
        await post.save().then(()=>{
            console.log(post)
            //next()
            res.status(201).send()
        })
    }catch(e){
        console.log(e)
        res.status(500)
        
    }
})

module.exports = router