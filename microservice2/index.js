const express = require('express')
const app = express()

app.get('/user', (req,res)=>{
    res.send({'msg':'Microservice 2: User Said Hi'})
})

app.listen(3001, ()=>{
    console.log('Microservice 2 is listening at port 3001')
})