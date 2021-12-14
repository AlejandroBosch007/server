const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv")
dotenv.config()

const midd = require("./middlewares/midd")
const db = require("./db/db")

const app = express()

app.use(express.json())
app.use(midd.log)

app.listen(process.env.PORT, () =>{
    console.log("Servidor inicializado correctamente en http://"+ process.env.HOST + process.env.PORT)
})

app.get('/',(req,res) => {
    res.send(db.Animales)
})

app.post('/animal',(req,res) => {
    db.nuevoAnimal(req.body.nombre,req.body.especie)
    res.send("OK")

})

