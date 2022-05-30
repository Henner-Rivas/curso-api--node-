const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
/*obtenes todos los registros  */

const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send({ data });
};

/* obtener un registro */
const getItem = (req, res) => {};

/* insertar registro */
const createItem = async (req, res) => {

    
try {
    const { body } = req;
    const bodyClean=matchedData(req)
    console.log(body);
    const data = await tracksModel.create(odyClean);
  
    res.send({ data });
} catch (error) {
    handleHttpError(res,"EORRR_GET_ITEMS")

}


};

/* actuaizar registro */
const updateItem = (req, res) => {};

/* delete one */
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
