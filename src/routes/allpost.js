const expess = require('express')
const router = expess.Router()
const Post  = require("../model/blog")

router.get('/',async(req,res) => {
    try{
        const allpost = await Post.find().select('post_by body image post_at')
        res.json(allpost)

    }catch(e){
        console.log(e)
        res.send("error")
    }
    
})

module.exports = router