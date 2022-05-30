require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongoose')
const app= express()

app.use(cors())

app.use(express.json())
app.use(express.static("storage"))
/* api invocamos las rutas */
app.use("/api",require('./routes'))

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("app running for port"+ port)
})

dbConnect()