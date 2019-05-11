const express=require('express');
const fs = require('fs');
const app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.listen(8084,()=>{
    console.log('启动服务器');
})
app.get('/type',(req,res) => {
    fs.readFile('./static/data/type.json',(err,data) => {
        res.send(JSON.parse(data));
    })
})