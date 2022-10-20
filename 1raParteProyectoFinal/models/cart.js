import Producto from "./products.js";

export default class Carrito{
    constructor(){
        this.producto = new Producto();
        this.carritos = [];
        this.id = 1;
    }

    listar(id){
        let prod = this.carritos.find((car) => car.id == id);
        return prod || {error: "Carrito no encontrado"};
    }

    listarAll() {
        return this.carritos.length
            ? this.carritos
            : { error: " No hay carritos cargados"};
    }

    crearCarrito(){
        const car = {id: this.id++, TimeStamp: Date.now(), productos: []};
        this.carritos.push(car);
        return car;
    }

    guardarProductoEnCarrito(idProd, idCarrito){
        console.log(idProd);
        const producto = this.producto.listar(idProd);
        this.carritos.forEach((carro) => {
            carro.id == idCarrito ? carro.productos.push(producto) : null;
        });

        return this.carritos;
    }
    
    actualizar(car, id){
        car.id = Number(id);
        let index = this.carritos.findIndex((car) => car.id == id);
        this.producto.splice(index, 1, car);
    }

    borrar(id){
        let index = this.carritos.findIndex((car) => car.id == id);
        return this.carritos.splice(index, 1);
    }



};