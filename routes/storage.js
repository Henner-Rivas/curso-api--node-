const express = require("express");
const { createItem,getItem,getItems ,deleteItem, updateItem } = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validaror/storage");
/* es un funciones que se ejecuta despues de algo */

const router = express.Router();
// Todo http://localhost/tracks GET, POST, DELETE, PUT
 

 router.get("/", getItems)
router.get("/:id",validatorGetItem, getItem) 

router.delete("/:id",validatorGetItem, deleteItem) 

router.put("/:id", validatorGetItem,updateItem) 

router.post("/",uploadMiddleware.single("myfile"),createItem);

module.exports = router;
