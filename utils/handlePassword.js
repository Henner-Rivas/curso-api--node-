const bcrypyjs= require('bcryptjs')

/* encriptando contraseña */
const encrypt=async(passwordPain)=>{
 const hash= await bcrypyjs.hash(passwordPain,10)
 return hash
}

/* compra contraseña incriptada y sin incriptar */
const compare= async(passwordPain, hashPassword)=>{
  return await bcrypyjs.compare(passwordPain,hashPassword)
}

module.exports={encrypt,compare}

