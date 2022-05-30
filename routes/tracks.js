const express = require('express')
const { getItems,getItem, createItem } = require('../controllers/tracks')
const customHeader = require('../middleware/customHeader')
const { validatorCreateItem } = require('../validaror/tracks')

const router= express.Router()
// Todo http://localhost/tracks GET, POST, DELETE, PUT


router.get("/", getItems)
router.get("/:id", getItem)
router.post("/",validatorCreateItem  , createItem)

module.exports= router