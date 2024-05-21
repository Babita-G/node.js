const express= require('express');
const app= express();

app.get('',(req,res)=>{
    res.send(`
    this is home page <a href="/about">click here</a>    
    `);   //link bhaira xaina
});

app.get('/about',(req,res)=>{
    res.send('this is about page');
});

app.listen(9000);
//port already in use so error will arise
