import express from "express";
import Carrito from "../models/cart.js";

const router = router;

const carrito = new Carrito();

router.post("",(req, res) =>{
    const carritoCreado = carrito.crearCarrito();
    res.send(carritoCreado);

});

router.delete("/:id",(req, res) =>{
    const carritoBorrado = carrito.borrar(req.params.id);
    res.send(carritoBorrado);
});

router.get("/", (req, res) => {
    const listaCarritos = carrito.listarAll();
    res.send(listaCarritos);
});

router.post("/:id/productos/:idPrd", (req, res) => {
    const respuesta = carrito.guardarProductoEnCarrito(req.params.idPrd, req.params.id);
    res.send(respuesta);
});

export default router;