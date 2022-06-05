const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handlejwt");
const getProperties = require("../utils/handleProveertiesEngine");
const keyProperties= getProperties()
const authMiddleware =async (req,res,next)=>{

try {
    
if(!req.headers.authorization){
    handleHttpError(res,"not token ",401)
   return
}
   const token= req.headers.authorization.split(" ").pop();
   const dataToken= await verifyToken(token)


    if(!dataToken){
      handleHttpError(res,"NOT PAYLOAD DATA")

    }

const query={ 
  [keyProperties.id]:dataToken[keyProperties.id]
}
    
    const user= await usersModel.findOne({where:query })
    req.user=user

  next()
} catch (error) {
    console.log(error)
    handleHttpError(res,"not session",401)
}

}

module.exports = authMiddleware