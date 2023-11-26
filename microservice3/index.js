const express = require('express')
const app = express()

app.get('/user', (req,res)=>{
    res.send({'msg':'Microservice 3: User Said Hola'})
})

app.listen(3002, ()=>{
    console.log('Microservice 3 is listening at port 3002')
})