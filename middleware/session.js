const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handlejwt");

const authMiddleware =async (req,res,next)=>{

try {
    
if(!req.headers.authorization){
    handleHttpError(res,"not token ",401)
   return
}
   const token= req.headers.authorization.split(" ").pop();
   const dataToken= await verifyToken(token)
   if(!dataToken._id){
       handleHttpError(res, "Error ID TOKEN")
    }
    
    const user= await usersModel.findById(dataToken._id)
    req.user=user

  next()
} catch (error) {
    console.log(error)
    handleHttpError(res,"not session",401)
}

}

module.exports = authMiddleware