const express = require ("express")
const router = express.Router()



// Sin Destructuring
//const homeControler=require("../controllers/homecontroller")
//router.get("/",homeControler.home)


// Con destructuring (clase de apoyo)

const {home}= require("../controllers/homecontroller")
router.get("/",home)

module.exports= router

