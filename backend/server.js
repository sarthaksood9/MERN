const app = require("./app");

const express =require("express")

const dotenv = require("dotenv");
const connectDatabase  = require("./config/database") 

app.use(express.json())

// config

dotenv.config({path:"backend/config/config.env"});


// database

connectDatabase();


app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})