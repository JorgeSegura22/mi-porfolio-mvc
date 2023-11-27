const express = require("express")
const app = express()
const port= 3000
const rutahome= require("./routes/routeHome")
const rutaAbout = require("./routes/routeAbout")


app.get("/",rutahome)
app.get("/about",rutaAbout)
app.use(express.static("public"))

app.listen(port,()=>{
   console.log("Servidor corriendo en el puerto " + port)
})