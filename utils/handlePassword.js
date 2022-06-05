const bcrypt = require("bcryptjs");

/* encriptando contraseña */
const encrypt=async(passwordPain)=>{
 const hash= await bcrypt.hash(passwordPain,10)
 return hash
}

/* compra contraseña incriptada y sin incriptar */
const compare= async(passwordPlain, hashPassword)=>{
  return await bcrypt.compare(passwordPlain, hashPassword);
}

module.exports={encrypt,compare}

