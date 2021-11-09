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
                const conexion = await axios.get(`http://localhost:3000/find/${service}/${version}`);
                const ip = conexion.data.ip;
                const port = conexion.data.port;
                const bol = await axios.get(`http://${ip}:${port}/Check/${evento}`);
                const boldeverdad= bol.data.result;
                console.log(boldeverdad);
                if (boldeverdad) {
                    this.carrito.push(evento);
                    console.log("Fruta añadida a la cesta");
                    return true;
                } else {
                    console.log("No hay stock de este producto");
                    return false;
                }

            } catch (error) {
                console.log(error);
                return false;
            }
        }
        //funcion de eliminar un producto
    removeProducto(evento) {
            //falta comprobar que existe ese producto dentro de la lista
            const idex = this.carrito.indexOf(evento);
            if (idex < 0) {
                return false;
            } else { this.carrito.splice(idex, 1); return true; }

        }
        //funcion para mostarr la cesta actual
    tostring() {
        console.log("Tu cesta actual es: " + this.carrito);
        return this.carrito;
    }

}
module.exports = Carrito;