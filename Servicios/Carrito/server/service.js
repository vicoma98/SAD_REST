const express = require('express');
const cesta = require('../entities/cesta')
const service = express();

module.exports = (config) => {
    return new Promise((cb) => {
        const log = config.log();
        cesta.ShoppingCartGenerator.GetCart("localhost:3000", "ServicioMongo", "1.0.0").then((car) => {
            // Add a request logging middleware in development mode
            if (service.get('env') === 'development') {
                service.use((req, res, next) => {
                    log.debug(`${req.method}: ${req.url}`);
                    return next();
                });
            }

            service.get('/put/:fruta', (req, res) => {
                const nombre = req.params;
                car.addProducto(nombre.fruta).then((resp) => {
                    if (resp) {
                        res.json(true);
                    } else {
                        res.json(false);
                    }
                });

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
            cb(service);
        });
    });


};