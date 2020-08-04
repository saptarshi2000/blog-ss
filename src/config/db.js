const mongoose = require('mongoose')

const MONGOURI = "mongodb://localhost/users"

const InitiateDb = async () => {
    try{
        await mongoose.connect(MONGOURI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("database connected")
    }catch(e){
        console.log(e)
        throw e
    }
}

module.exports = InitiateDb 