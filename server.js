const express = require("express");
const fs = require("fs");
const { ErrorHandler, DataValidation } = require("./middleware");
require("dotenv").config();

const PORT = process.env.PORT || 10000;

const app = express();

app.use(express.json());

app.post("/create_user",DataValidation,(req,res)=>{
    res.status(200).json({
        message : "All data validated"
    })
})

app.use(ErrorHandler);

app.use("/*",(req,res)=>{
    res.status(404).json({
        message : "PATH NOT FOUND"
    });
});

app.listen(PORT,()=>{
    console.log("Server up and running at",PORT);
});