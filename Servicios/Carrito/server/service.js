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
        await car.addProducto(producto);
        return res.status(200).send();
    });

    service.get('/remove/:name', async(req, res, next) => {
        return next('Not implemented');
    });
    service.get('/list', (req, res, next) => {
        return res.json(car.toString());
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