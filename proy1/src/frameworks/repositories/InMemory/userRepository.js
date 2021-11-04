const {
    inMemory: inMemoryDb
} = require('../../database');

const {
    v4: uuidv4
} = require('uuid');

module.exports = {
    add: async evento => {
        /*if (!user.cod) {
            user.cod = uucodv4();

        }
        inMemoryDb.users.push(user);
        return user;
        */
        const bol = await inMemoryDb.Buscar(evento); //esta wea deberia estar en /database para buscar dentro de la bbdd
        if (bol) {
            this.carrito.push(evento);
            return ("Fruta añadcoda a la cesta");
        } else {
            return ("No hay stock de este producto");
        }
    },
    delete: evento => {
        const index = inMemoryDb.users.findIndex(item => item.cod === evento.cod);
        if (index >= 0) {
            inMemoryDb.carrito.splice(index, 1);
            return evento;
        }
        return null;

    },
    /*update: user => {
        const index = inMemoryDb.users.findIndex(item => item.cod === user.cod);
        if (index >= 0) {
            inMemoryDb.users[index] = user;
            return inMemoryDb.users[index];
        }
        return null;
    },*/
    getBycod: cod => {
        return inMemoryDb.users.find(item => item.cod === cod);
    }


}