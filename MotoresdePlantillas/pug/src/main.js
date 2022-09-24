const express = require('express');

const Products = require('../model/productos.js');

const productos = new Products();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//--------------------------------------------

app.set('views', './views');
app.set('view engine', 'pug');

//--------------------------------------------

app.post('/productos', (req, res) => {
    const producto = req.body;
    productos.save(producto);
    res.redirect('/');
})

app.get('/productos', (req, res) => {
    const prods = productos.getAll();

    res.render("vista", {
        productos: prods,
        hayProductos: prods.length
    });
});

//--------------------------------------------
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})
server.on("error", error => console.log(`Error en servidor ${error}`));
