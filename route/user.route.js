const express = require('express');

const  router  = express.Router();
const { getUser, saveuser, loginuser } = require('../controler/user.controler');


// const mongoose = require("mongoose");

// const dbuser = require('/model/user.model');


// home route


  
  
  
  // register post request
  router.get("/",getUser);
  router.post("/register",saveuser);
  router.post("/login",loginuser);
  
  
  // // loging 
  // app.post("/login", async (req, res) => {
  //     try {
  //       const { email, password } = req.body; destructaring 
  //       const User = await user.findOne({ email: email });
  //       if (User && User.password === password) {
  //         res.status(200).json({ status: "valid user" });
  //       } else {
  //         res.status(404).json({ status: "Not valid user" });
  //       }
  //     } catch (error) {
  //       res.status(500).json(error.message);
  //     }
  //   });
  
  // login using database 
  
  
  
 
  
    module.exports =  router;