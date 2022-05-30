const express = require("express");
const { createItem } = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage");
/* es un funciones que se ejecuta despues de algo */

const router = express.Router();
// Todo http://localhost/tracks GET, POST, DELETE, PUT
 

/* router.get("/", getItems)
router.get("/:id", getItem) */
router.post("/",uploadMiddleware.single("myfile"),createItem);

module.exports = router;
