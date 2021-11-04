const express = require('express');

const {
    addProductoController,
    RemoveProductoControler,
    listProductControler,
} = require('../../../controllers');


module.exports = dependencies => {
    const router = express.Router();
    const { addProductoController } = addProductoController(dependencies);
    const { RemoveProductoControler } = RemoveProductoControler(dependencies);
    const { listProductControler } = listProductControler(dependencies);

    router.route('/').post(addProductoController);
    router.route('/').delete(RemoveProductoControler);
    router.route('/').get(listProductControler);
    return router;

}