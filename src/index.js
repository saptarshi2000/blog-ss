const express = require('express')
const bodyParser = require('body-parser')

const InitiateDb = require('./config/db')
const userroutes = require('./routes/userroutes')

InitiateDb()
const PORT = 3030

var app = express()
app.use(bodyParser.json())

app.use('/userrouters',userroutes)

app.use('/test',(req,res)=>{
    res.send('test server')
})

app.listen(PORT,(req,res)=>{
    console.log(`server started at port ${PORT}`)
})