const express = require("express");
const app  = express();

require('dotenv').config();

const testRouter = require('./controller/testController.js');

app.listen("5000",()=>{
    console.log(`Server has been started`)
})

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',testRouter);