const UserModel = require("../models/UserModel");
const ChangePasswordService = require("../services/UserServices/ChangePasswordService");
const CreateUserService = require("../services/UserServices/CreateUserService");
const LoginService = require("../services/UserServices/LoginService");
const ResetPasswordService = require("../services/UserServices/ResetPasswordService");
const SendOtpService = require("../services/UserServices/SendOtpService");
const VerifyOTPService = require("../services/UserServices/VerifyOTPService");
const { EncodeToken } = require("../utilities/TokenHelper");

exports.CreateUser = async(req, res) =>{
    const result = await CreateUserService(req);
    
    if(result.status ==="success") {
        // Cookies Option
        const cookieOption={
            expires:new Date(Date.now()+24*60*60*1000), 
            httpOnly:true, 
            secure: true, 
            sameSite: "None"
        }
        // Set Cookies With Response
        res.cookie('token', result.token, cookieOption)
        return res.status(200).json(result)

    } else {
        return res.status(200).json(result)
    }

};


exports.Login = async(req, res) =>{
    const result = await LoginService(req);
    if(result.status ==="success") {
        // Cookies Option
        const cookieOption={
            expires:new Date(Date.now()+24*60*60*1000), 
            httpOnly:true, 
            secure: true, 
            sameSite: "None"
        }
        // Set Cookies With Response
        res.cookie('token', result.token, cookieOption)
        return res.status(200).json(result)

    } else {
        return res.status(200).json(result)
    }
};


exports.Logout = async(req, res) =>{
  
    const cookieOption={
        expires:new Date(Date.now()-24*60*60*1000),
        httpOnly:true, 
        secure: true, 
        sameSite: "None"
    }

    // Set Cookies With Response
    res.cookie('token',"", cookieOption)
    return res.status(200).json({status:"success"})

}


exports.ChangePassword = async(req, res) =>{
    const result = await ChangePasswordService(req)
    return res.status(200).json(result)
}


exports.SendOtp = async(req, res) =>{
    const result = await SendOtpService(req)
    return res.status(200).json(result)
}




exports.VerifyOTP = async(req, res) =>{
    const result = await VerifyOTPService(req);

    if(result.status ==="success") {
        // Cookies Option
        const cookieOption={
            expires:new Date(Date.now()+24*60*60*1000), 
            httpOnly:true, 
            secure: true, 
            sameSite: "None"
        }
        // Set Cookies With Response
        res.cookie('token', result.token, cookieOption)
        return res.status(200).json(result)

    } else {
        return res.status(200).json(result)
    }
}





exports.ResetPassword = async(req, res) =>{
    const result = await ResetPasswordService(req)
    return res.status(200).json(result)
}
