const express = require('express');
const cesta = require('../entities/cesta')
const service = express();

module.exports = (config) => {
    const log = config.log();
    const car = new cesta.Carrito();
    // Add a request logging middleware in development mode
    if (service.get('env') === 'development') {
        service.use((req, res, next) => {
            log.debug(`${req.method}: ${req.url}`);
            return next();
        });
    }

    service.get('/put', (req, res, next) => {
        const { nombre } = req.params;
        console.log('hola mundo raro');
        car.addProducto(nombre);
        return next('Not implemented');
    });

    service.get('/names', (req, res, next) => {
        return next('Not implemented');
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