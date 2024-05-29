//llamamos a express para poder usarlo.
const express = require("express")
//Es de ayuda crear algo que almacene express para poder usar sus métodos
const app = express()
const PORT = 8000;

const fighters = {
    "kyo": {
        "age": 29,
        "birthName": "Kyo Kusanagi",
        "birthLocation": "Tokyo, Japan"
    },
    "iori": {
        "age": 28,
        "birthName": "Iori Yagami",
        "birthLocation": "Tokyo, Japan"
    },
    "terry": {
        "age": 29,
        "birthName": "Terry Bogard",
        "birthLocation": "USA"
    }
}

//requests, podemos decirle al servidor que pedidos escuchar
//req maneja los pedidos y res las respuestas
app.get("/", (req, res) => {
    //__dirname ubica el path donde server.js está ubicado
    res.sendFile(__dirname + "/index.html")
})

// :fighterName permite poner un string en la url (en la barra de navegacion) para pedir un rapero especifico
// : indica que fighterName es un query parameter, no es parte del path, es algo que se pasa con el path
app.get("/api/:fighterName", (req, res) =>{
    //fighterName es un query parameter, por eso lo llamamos con params
    const fightersName = req.params.fighterName.toLowerCase()
    //se usa bracket notation porque los nombres tienen espacios
    if (fighters[fightersName]) {
        res.json(fighters[fightersName])
    }else{
        res.json(fighters['terry'])
    }
    //res.json(fighters)
})
//heroku tal vez no quiera usar este puerto
/*
app.listen(PORT, () =>{
    console.log("Ther server is running on" + PORT)
})
*/

app.listen(PORT, () =>{
    console.log("Ther server is running on" + PORT)
})