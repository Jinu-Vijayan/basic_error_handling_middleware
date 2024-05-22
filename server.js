const express = require("express");
const fs = require("fs");
require("dotenv").config();

const PORT = process.env.PORT || 10000;

const app = express();

app.use(express.json());

const DataValidation = (req,res,next) => {
    const {email,firstName,lastName,password,phoneNo} = req.body;

    const firstLetterUpperCaseRegex = /^[A-Z]/;
    const emailRegex = /@/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    const phoneNoRegex = /^\d{10}$/

    if(!firstLetterUpperCaseRegex.test(firstName)){
        res.status(400).json({
            message: "First letter of first name should be capital"
        })
    } else if (!firstLetterUpperCaseRegex.test(lastName)){
        res.status(400).json({
            message : "First letter of the last name should be capital"
        })
    } else if (!emailRegex.test(email)){
        res.status(400).json({
            message : "Please enter a valid email id"
        })
    } else if (!passwordRegex.test(password)){
        res.status(400).json({
            message : "Please enter a valid password, the password should containe at least 8 characters, with one uppercase letter, one numeric character and one special character"
        })
    } else if(!phoneNoRegex.test(phoneNo)){
        res.status(400).json({
            message : "Please enter a valid phone number"
        })
    } else {
        next();
    }
}

app.post("/create_user",DataValidation,(req,res)=>{
    res.status(200).json({
        message : "All data validated"
    })
})

app.use("/*",(req,res)=>{
    res.status(404).json({
        message : "PATH NOT FOUND"
    });
});

app.listen(PORT,()=>{
    console.log("Server up and running at",PORT);
});