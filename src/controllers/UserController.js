const UserModel = require("../models/UserModel");
const CreateUserService = require("../services/UserServices/CreateUserService");
const LoginService = require("../services/UserServices/LoginService");
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
