const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    email: {type: String, required: true, trim: true},
    password:{type:String, required: true},
    role:{type:String, default: "patient"},

}, {timestamps:true, versionKey:false})



const UserModel = mongoose.model("users",dataSchema );
module.exports = UserModel