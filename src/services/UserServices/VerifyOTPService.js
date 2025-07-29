const OTPModel = require("../../models/OTPModel");
const UserModel = require("../../models/UserModel");
const { EncodeToken } = require("../../utilities/TokenHelper");

const VerifyOTPService  = async(req) =>{
    try {
        const email= req.params.email;
        const otp= req.params.otp;
        
        const total = await OTPModel.countDocuments({email: email, otp: otp});

        if(total > 0) {

            const user = await UserModel.findOne({ email });
            
            // User Token Create
             const userData = {
                email: email,
                role: user.role,
                userId: user._id
            }
            const token = EncodeToken(userData) 
    

            // OTP Code Update To 0
            await OTPModel.updateOne({email:email, otp: otp}, {$set: {status: 1 }});
            return {status:"success", message:"Your OTP Verify Successfully", token: token }

        }else{
            return {status:"fail", message:"Invalid OTP"}
        }

    } catch (error) {
        return {status:"fail",data:error.toString()}
    }

};




module.exports=VerifyOTPService;