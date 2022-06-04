const express = require('express')
const { getItems,getItem, createItem, deleteItem } = require('../controllers/tracks')
const checkRol = require('../middleware/checkRol')
const customHeader = require('../middleware/customHeader')
const authMiddleware = require('../middleware/session')
const { validatorCreateItem, validatorGetItem } = require('../validaror/tracks')

const router= express.Router()
// Todo http://localhost/tracks GET, POST, DELETE, PUT


router.get("/",authMiddleware,  getItems)
router.get("/:id", validatorGetItem, getItem)
router.post("/",authMiddleware,checkRol(['admin']) ,validatorCreateItem  , createItem)

router.put("/:id",validatorGetItem, validatorCreateItem  , createItem)
router.delete("/:id", validatorGetItem, deleteItem)

module.exports= router