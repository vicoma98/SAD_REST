const express = require('express');
const conexion = require('./lib/conexion_bbdd')
const service = express();

module.exports = (config) => {
    const log = config.log();
    // Add a request logging middleware in development mode
    if (service.get('env') === 'development') {
        service.use((req, res, next) => {
            log.debug(`${req.method}: ${req.url}`);
            return next();
        });
    }

    service.get('/Check/:name', async(req, res) => {
        const frutaid = req.params;
        const conBD = await conexion.Buscar(frutaid.name);
        return res.json({ result: conBD });
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