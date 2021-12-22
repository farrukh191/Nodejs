const express= require('express');

const app =express();

app.get('/',(req,res)=>{
    res.send("this is home page");
});

app.get('/about',(req,res)=>{
    res.send("this is about page");
});

app.get('/contact',(req,res)=>{
    res.send("this is contact page");
});



app.listen(3000, ()=>{
    console.log('this server is running on port 3000');
});