const express = require('express');
//const hbs = require('hbs');
const path = require('path');


const port = process.env.PORT||8090;
const app = express();

const publicDP = path.join(__dirname,'../public');
app.use(express.static(publicDP));

app.set('view engine','hbs');
app.get('/',(req,res)=>{
    res.render('index')
});

app.listen(port,()=>{
    console.log(`We are servering on port ${port}`)
});