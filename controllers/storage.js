const {storageModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
const PUBLIC_URL=process.env.PUBLIC_URL
/*obtenes todos los registros  */
const getItems=async (req,res)=>{

    try {
        
        const data= await storageModel.find({})
        res.send({data})
    } catch (error) {
        handleHttpError(res,"EORRR_GET_ITEMS")
    }
}

/* obtener un registro */
const getItem=(req,res)=>{

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
        handleHttpError(res,"EORRR_create_ITEMS")

    }
}

/* actuaizar registro */
const updateItem=(req,res)=>{}


 /* delete one */
const deleteItem=(req,res)=>{}



module.exports={getItems,getItem,createItem,updateItem,deleteItem }