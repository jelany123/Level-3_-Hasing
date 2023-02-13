const  mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email : {
        type:String,
        require:true,

    },
    password:{
        type:String,
        require:true,
    },
    createdOn:{
        type:String,
        default:Date.now,
    },
});
module.exports =mongoose.model('hashfung', UserSchema);