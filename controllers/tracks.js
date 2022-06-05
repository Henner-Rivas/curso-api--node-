const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
/*obtenes todos los registros  */

const getItems = async (req, res) => {
    const user= req.user;

  const data = await tracksModel.findAllData({});
  res.send({ data,user });
};

/* obtener un registro */
const getItem =async (req, res) => {

        try {
            req= matchedData(req)
            const {id}= req;
            console.log(id)
            const data= await tracksModel.findOneById(id)
            res.send({data})
        } catch (error) {
             handleHttpError(res,"error get item")
        }

};

/* insertar registro */
const createItem = async (req, res) => {

    
try {
    const { body } = req;
    const bodyClean=matchedData(req)
    console.log(body);
    const data = await tracksModel.create(bodyClean);
  
    res.send({ data });
} catch (error) {
    console.log(error)
    handleHttpError(res,"EORRR_GET_ITEMS")

}


};

/* actuaizar registro */
const updateItem =async(req, res) => {

    try {
        const {id,...body}= matchedData(req);
        const data = await tracksModel.findOneOneAndUpdate(id,body);
      
        res.send({ data });
    } catch (error) {
        handleHttpError(res,"EORRR_update_ITEMS")
    
    }
     
};

/* delete one */
const deleteItem =async (req, res) => {
  try {
       
      req= matchedData(req);
      const {id}= req;
      console.log(id)
      const data= await tracksModel.delete({_id:id})
      res.send({data})
  } catch (error) {
    handleHttpError(res,"EORRR_delete_ITEMS")

  }
  
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
