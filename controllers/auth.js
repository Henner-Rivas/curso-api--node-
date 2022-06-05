const { matchedData } = require('express-validator');
const { usersModel } = require('../models');
const { tokenSign } = require('../utils/handlejwt');
const { encrypt, compare } = require('../utils/handlePassword');
const { handleHttpError } = require('../utils/handleError')

/* este controlador en el encargado de registrar */
    const registerCtrl = async (req, res) => {
        try {
            req= matchedData(req);
            const passwordHash=await encrypt(req.password)
            const body= {...req,password:passwordHash}
            
            console.log("🚀 ~ file: auth.js ~ line 14 ~ registerCtrl ~ body", body)
            const dataUser= await usersModel.create(body)
            
            const data= {
                token: await tokenSign(dataUser),
                user: dataUser
            }
        
            res.send({data})
        } catch (error) {
            console.log(error)
        }
        


    };


    const loginCtrl = async (req, res) => {
        try {
            const body= matchedData(req);
            const user= await usersModel.findOne( {where:{email: body.email} });
            console.log("🚀 ~ file: auth.js ~ line 44 ~ loginCtrl ~ check", body.email)
            if(!user){
                handleHttpError(res,"USER NOT EXISTS", 404)
                return
            }
            
            const check = await compare(body.password, user.password);
            console.log("🚀 ~ file: auth.js ~ line 43 ~ loginCtrl ~ check", check)

             
         /*    if(!check){
                handleHttpError(res,"PASSWORD INVALID",401)
            } */
            user.set('password',undefined,{strict:false})
            user.set('age',undefined,{strict:false})

            const data= {
                token: await tokenSign(user),
                user
            }
            
        
            res.send({data})
        } catch (error) {
            handleHttpError(res,"ERROR AL LOGIN ")
            console.log(error)
        }
        


    };


    module.exports= {registerCtrl,loginCtrl}
