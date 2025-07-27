const UserModel = require("../../models/UserModel");
const { EncodeToken } = require("../../utilities/TokenHelper");

const CreateUserService = async(req) =>{
    try {
        const reqBody= req.body;

        //Email user already exits or not
        const isExits = await UserModel.countDocuments({email: reqBody.email});
        
        if(isExits > 0 ){
             return {status:"fail", data: `This ${reqBody.email} email is already used`}
        }


        //Creating user
        const data = await UserModel.create(reqBody);
        if(data._id){

            //Creating Token
            const userData = {
                email: data.email,
                role: data.role,
                id: data._id
            }
            const token = EncodeToken(userData) 

            return {status:"success", data: userData, token: token }
        }
        

       
    } catch (error) {
        return {status:"fail",  data:error.toString()}   
    }
    
}


module.exports=CreateUserService