const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const dataSchema = mongoose.Schema({
    email: {
        type: String, 
        lowercase: true,
        trim: true,
        required: [true, "Please add an email"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email",
          ],
    },
    password:{type:String, required: true},
    role:{type:String, default: "patient"},

}, {timestamps:true, versionKey:false})



//   Encrypt password before saving to DB
dataSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
  
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
});




const UserModel = mongoose.model("users",dataSchema );
module.exports = UserModel