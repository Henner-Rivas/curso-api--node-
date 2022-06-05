const jwt= require("jsonwebtoken")
const getProperties = require("./handleProveertiesEngine")
const keyProperties= getProperties()
const JWT_SECRET= process.env.JWT_SECRET
/* user objeto del usuario */
const tokenSign=async(user)=>{
  const sign=  jwt.sign(
      {
      [keyProperties.id]:user[keyProperties.id],
      role:user.role
      },
      JWT_SECRET,
      {
         expiresIn:"2h"
      }
  )
  return sign
}

const verifyToken= async(tokenjwt)=>{
try {
    return jwt.verify(tokenjwt, JWT_SECRET)
} catch (error) {
    return null
}
}

module.exports={tokenSign,verifyToken}