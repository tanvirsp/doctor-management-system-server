const UserModel = require("../models/UserModel");

exports.CreateUser = async(req, res) =>{
    
    try {
        const reqBody = req.body;
        const result = await UserModel.create(reqBody);
        res.json({status:"success", data: result })
      

    } catch (error) {
        res.json({status:"fail", data: error.toString() })
       
    }
  

}