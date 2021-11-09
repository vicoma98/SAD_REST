const express = require('express');
const Carrito = require('../entities/cesta')
const service = express();
const car = new Carrito();

module.exports = (config) => {
    const log = config.log();
    // Add a request logging middleware in development mode
    if (service.get('env') === 'development') {
        service.use((req, res, next) => {
            log.debug(`${req.method}: ${req.url}`);
            return next();
        });
    }

    service.put('/add/:name', async(req, res, next) => {
        const producto = req.params.name;
        const resultado = await car.addProducto(producto);
        return res.json(resultado).status(200).send();
    });

    service.get('/remove/:name', (req, res, next) => {
        const producto = req.params.name;
        const resultado = car.removeProducto(producto);
        return res.json(resultado).status(200).send();
    });
    service.get('/list', (req, res, next) => {
        const listaCompra = car.tostring();
        return res.json(listaCompra);
    });

    // eslint-disable-next-line no-unused-vars
    service.use((error, req, res, next) => {
        res.status(error.status || 500);
        // Log out the error to the console
        log.error(error);
        return res.json({
            error: {
                message: error.message,
            },
        });
    });
    return service;
};