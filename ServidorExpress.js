const express = require('express');
const fs = require('fs');
const Contenedor = require('./ManejoDeArchivo');

const PORT = process.env.PORT || 8080;

const app = express();

const nuevoContenedor = new Contenedor('productos.json');

app.get('/productos', async (req, res) =>{
    const allProductos = await nuevoContenedor.getAll().then(item=>item);
    res.send(allProductos);
})

app.get('/productoRandom', async (req, res) =>{
    const allProductos = await nuevoContenedor.getAll().then(item=>item);
    const randomNum = Math.floor(Math.random() * allProductos.length);
    const randomProducto = allProductos[randomNum];
    res.send(randomProducto); 
})

app.get('*', (req, res) =>{
    res.status(404).send(`<h1 style = "color: blue;">ERROR 404<\h1>`);
})



const connectedServer = app.listen(PORT, () =>{

    console.log('Server is on and running in port ' +PORT);

});

connectedServer.on('error', (error)=>{
    console.log(error.message);
});

