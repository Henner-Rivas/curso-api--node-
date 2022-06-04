const express = require('express')
const {loginCtrl,registerCtrl} = require('../controllers/auth')

const { validatorRegisterItem ,validatorLoginItem} = require('../validaror/auth')

const router= express.Router()
// Todo http://localhost/tracks GET, POST, DELETE, PUT


/* http://localhost:3001/ api/auth/login */
/* http://localhost:3001/ api/auth/register */

router.post("/register",validatorRegisterItem,registerCtrl)
router.post("/login",validatorLoginItem,loginCtrl)


module.exports= router