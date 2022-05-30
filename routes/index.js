const express = require('express')
const fs= require("fs")
const router= express.Router()
const PATH_ROUTES= __dirname; // dirmane nos data la ruta de documento

const removeExtension= ( filename)=>{
    return filename.split('.').shift()
}

const ffs= fs.readdirSync(PATH_ROUTES).filter((file)=> {
  const name= removeExtension(file) // todo users, storage , tacks
  if (name !== "index") {
       router.use(`/${name}`,require(`./${file}`)) // http://localhost:3000/uses
  }
}) 
console.log("🚀 ~ file: index.js ~ line 7 ~ ffs", ffs)
module.exports= router