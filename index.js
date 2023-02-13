const express = require('express');

require("dotenv").config();
// const route = require("./route/user.route");
const app = express();
const mongoose = require("mongoose");

// console.log(md5("messagessss"));



// const route = require('./controler/user.controler');
const cors = require("cors");
const router= require("./route/user.route");

// router.use(cors());
// router.use(express.urlencoded({extended:true}));
// router.use(express.json());


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router);


const PORT = process.env.PORT||8000;


// const mongoose = require("mongoose");

// const dbuser = require('/model/user.model');
// const dbuser = require('./model/user.model');
// const dbURL = 'mongodb+srv://jelany:jelany528@cluster0.1hvc5cx.mongodb.net/User'
 const dbURL =process.env.DB_URL;
mongoose.connect(dbURL)
.then(()=>{
    console.log("mongodb atlas is connected");
}).catch((error)=>{
    console.log(error);
    process.exit(1);
});

 //route not found
 app.use((req,res,next)=>{
    res.status(404).json({
        message: "route not found",
      });
});
// server error
 app.use((err, req, res, next) => {
    res.status(500).json(err.message);
  });


app.listen(PORT, ()=>{
    console.log(`server is runnig at http://localhost:${PORT}`);  
});