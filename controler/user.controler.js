const dbuser = require("../model/user.model");
const path = require('path');
const md5 = require("md5");


exports.getUser = ( req,res)=>{
   
    res.sendFile(path.join(__dirname +'/../views/app.html'));
  }
  exports.saveuser = async (req,res)=>{
    try {
        const NewUser = new dbuser({
          email:req.body.email,
          password:md5(req.body.password),
        })
         await NewUser.save();
        res.status(201).json(NewUser) 
    } catch (error) {
        res.status(500).json(error.message);  
    }
   
}
exports.loginuser =async(req,res)=>{
    try {
     const email = req.body.email;  //body thika nilam email and password;
     const password = md5(req.body.password);  //body thika nilam email and password;
    const User = await dbuser.findOne({email:email}); // mach korlam email ke databse thika
    if(User&& User.password === password){           //jodi 
      res.status(200).json({message:"valid user"});
    }
    else{
      res.status(404).json({message:"not valid user"});
    }
  
  
      
    } catch (error) {
     res.status(500).json(error.message);
    }
  
  }