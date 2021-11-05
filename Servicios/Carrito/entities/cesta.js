//const { añadir } = require("./MongoDB Atlas");

//let DB = require('../BBDD/conexion_bbdd');
//clase carrito
class Carrito {
    constructor() {
        this.carrito = [];
    }

    newcarrito() {
            this.carrito = [];
            return carrito;
        }
        //funcion que añade un producto al carrito basandose en run() para comprobar si tiene o no stock
    async addProducto(evento) {
            //comprobación mongodb
            //const bol = await DB.Buscar(evento);
            if (bol) {
                this.carrito.push(evento);
                console.log("Fruta añadida a la cesta");
            } else {
                console.log("No hay stock de este producto");
            }


        }
        //funcion de eliminar un producto
    removeProducto(evento) {
            //falta comprobar que existe ese producto dentro de la lista
            const idex = this.carrito.indexOf(evento);
            this.carrito.splice(idex, 1);
        }
        //funcion para mostarr la cesta actual
    tostring() {
        console.log("Tu cesta actual es: " + this.carrito);
        return this.carrito;
    }

}
module.exports.Carrito = Carrito;