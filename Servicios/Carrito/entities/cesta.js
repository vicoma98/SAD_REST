const axios = require("axios");

//let DB = require('../BBDD/conexion_bbdd');
//clase carrito
class ShoppingCartGenerator {
    static async GetCart(serviceRegistryURL, databaseName, databaseVer) {
        return await axios.get(`http://${serviceRegistryURL}/find/${databaseName}/${databaseVer}`).then((response) => {
            if (response.status == 200) {
                return new carrito(response.data.ip, response.data.port);
            } else return null;
        }).catch((err) => { return null; });
    }
}
class Carrito {
    constructor(ip, puerto) {
        this.carrito = [];
        this.port = puerto;
        this.ip = ip;
    }


    async addProducto(evento) {
            //comprobación mongodb
            //const bol = await DB.Buscar(evento);
            console.log(this.ip, this.port);
            return await axios.get(`http://${this.ip}:${this.port}/Check/${evento}`).then((response) => {
                if (response.data) {
                    this.carrito.push(evento);
                    console.log("Fruta añadida a la cesta");
                    return true;
                } else {
                    console.log("No hay stock de este producto");
                    return false;
                }
            }).catch((err) => {
                console.log('Failed attempt' + err);
                return false;
            });



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
module.exports = { Carrito, ShoppingCartGenerator };