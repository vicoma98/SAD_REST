const express = require('express');
const userRoutes = require('./fruits')

module.exports = dependencies => {
    const routes = express.Router();
    const users = userRoutes(dependencies);
    routes.use('/fruit', users)
    return routes;
}