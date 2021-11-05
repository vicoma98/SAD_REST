const service = "ServicioMongo";
const axios = require('axios');
const version = '1.0.0';


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
            try {
                console.log('1');
                const conexion = await axios.get(`http://localhost:3000/find/${service}/${version}`);
                console.log('1');
                const ip = conexion.data.ip;
                const port = conexion.data.port;
                var bol = await axios.get(`http://${ip}:${port}/Check/${evento}`);
                if (bol) {
                    this.carrito.push(evento);
                    console.log("Fruta añadida a la cesta");
                } else {
                    console.log("No hay stock de este producto");
                }

            } catch (error) {
                console.log(error);
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
module.exports = Carrito;