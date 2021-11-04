const addProductoController = require('./addProductoController');
const removeProductoController = require('./RemoveProductoControler');
const listProductControler = require('./listProductControler');


module.exports = dependencies => {
    return {
        addProductoController: addProductoController(dependencies),
        removeProductoController: removeProductoController(dependencies),
        listProductControler: listProductControler(dependencies)
    }
}