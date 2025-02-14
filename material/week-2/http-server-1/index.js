const express = require("express");

const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.send("hello bro!")
    console.log(req.body);
})

app.post('/umm', (req,res)=>{
    console.log(req.headers);
    res.send({
        id: "123",
        message: "wassup"
    })
})

app.listen(port, ()=>{
    console.log("Server running on port "+port);
})