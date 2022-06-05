require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnectNodsql = require('./config/mongoose')
const {dbConnectMySQL} = require('./config/mysql')

const app= express()
const ENGINE_DB= process.env.ENGINE_DB;


app.use(cors())

app.use(express.json())
app.use(express.static("storage"))
/* api invocamos las rutas */
app.use("/api",require('./routes'))

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("app running for port"+ port)
})



ENGINE_DB === "nosql" ? dbConnectNodsql() : dbConnectMySQL() ;
