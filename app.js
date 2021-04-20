const { response } = require("express");

const express = require('express');
const app = express();

let usuarios = [ 
    {nome: "Juan Pablo", sobrenome: "Torres-Florez"}
];

// http://localhost:3000/inicio
app.get("/inicio", (request, response) =>{
    return response.send('Ola mundo!');
})
app.get("/usurios", (request, responde) => {
    return response.json(usuarios);
})

app.listen(3000, ()=> {
    console.log('servidor rodando!')
})
