const connectToMongo = require("./db");
const express = require('express');

connectToMongo();
const app = express()
const port=5000

app.use(express.json()) // This is a middleware . You have to use this if you wanna see req.body in thunderclient

//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/api/v1/login',(req,res)=>{
    res.send('Hello login')
})

app.get('/api/v1/signup',(req,res)=>{
    res.send('Hello signup')
})

app.listen(port,()=>{
    console.log(`iNotebook listening Listening on port : ${port}`)
})