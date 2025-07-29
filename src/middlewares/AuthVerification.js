const { DecodeToken } = require("../utilities/TokenHelper");

const AuthVerification =(req, res, next)=>{

    // Receive Token
    let token=req.headers['token']
    if(!token){
        token= req.cookies['token']
    }

    const decoded=DecodeToken(token);

    // Request Header Email+UserID Add
    if(decoded===null){
        return res.status(401).json({status:"fail", message:"Unauthorized User"})
    }
    else {
        req.headers.email=decoded.email;
        req.headers.userId=decoded.userId;
        req.headers.role=decoded.role;

        next();
    }

}




module.exports=AuthVerification