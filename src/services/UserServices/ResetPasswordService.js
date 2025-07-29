const bcrypt = require("bcrypt");
const UserModel = require("../../models/UserModel");
const OTPModel = require("../../models/OTPModel");

const ResetPasswordService = async(req) =>{
    try {
    
        const {newPassword, email} = req.body;

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        const otp = await OTPModel.findOne({email: email});
    
        if(otp.status === 1){
            await UserModel.updateOne({email: email}, {$set: {password: hashedPassword}});
            return {status:"success", message: "Your password have been changed"}

        } else {
            return {status:"fail", message: "Please verify your OTP"}
        }
  

    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
};

module.exports = ResetPasswordService;