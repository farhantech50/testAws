const express = require("express");
const app  = express();

require('dotenv').config();

const testRouter = require('./controller/testController.js');

app.listen(process.env.PORT,()=>{
    console.log(`Server has been started at port ${process.env.PORT}`)
})

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',testRouter);