const { matchedData } = require('express-validator')
const {storageModel } = require('../models')
const fs= require('fs')
const { handleHttpError } = require('../utils/handleError')
const PUBLIC_URL=process.env.PUBLIC_URL
const MEDIA_PATH=`${__dirname}/../storage`

/*obtenes todos los registros  */
const getItems=async (req,res)=>{

    try {
        
        const data= await storageModel.find({})
        res.send({data})
    } catch (error) {
        console.log(error)
        handleHttpError(res,"EORRR_GET_ITEMS")
    }
}

/* obtener un registro */
const getItem= async(req,res)=>{
    try {
        const body= matchedData(req)
        const {id}= body;
        console.log(req)
        const data= await storageModel.findById(id)
        res.send({data})

        
    } catch (error) {
        console.log(error)
        handleHttpError(res,"EORRR_GET_ITEMS")
    }
}

/* insertar registro */
const createItem=async (req,res)=>{
    try {
        const {body,file}= req;
        console.log(body)
        const fileData={
            filename:file.filename,
            url:`${PUBLIC_URL}/${file.filename}`
         }
         const data= await storageModel.create(fileData)
        res.send({data})
        
    } catch (error) {
        console.log(error)
        handleHttpError(res,"EORRR_create_ITEMS")

    }
}

/* actuaizar registro */
const updateItem= async(req,res)=>{
    try {
        const {id,...body}= matchedData(req);
        const data = await storageModel.findOneAndUpdate(id,body);
        res.send({ data });
    } catch (error) {
        handleHttpError(res,"EORRR_update_ITEMS")
    
    }

}


 /* delete one */
const deleteItem= async(req,res)=>{

    try {
        req= matchedData(req);
        const {id}= req;
        const datafile= await storageModel.findById(id)
        console.log(datafile)
        const {filename}= datafile;
        const filePath=`${MEDIA_PATH}/${filename}`//ruta del archivo
        await storageModel.delete({_id:id})
/*         fs.unlinkSync(filePath)
 */
        const data={
            filePath,
            deleted:1
        }
 
        res.send({data})
    } catch (error) {
        console.log(error)
      handleHttpError(res,"EORRR_delete_ITEMS")
  
    }

}



module.exports={getItems,getItem,createItem,updateItem,deleteItem }