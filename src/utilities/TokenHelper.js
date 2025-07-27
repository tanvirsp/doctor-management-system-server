const jwt=require('jsonwebtoken');

exports.EncodeToken=(obj)=>{
    return jwt.sign(obj, process.env.ACCESS_TOKEN, {expiresIn: '1d'})
}


exports.DecodeToken=(token)=>{
    try {
        return jwt.verify(token,process.env.ACCESS_TOKEN)
    }
    catch (e) {
        return null
    }
}