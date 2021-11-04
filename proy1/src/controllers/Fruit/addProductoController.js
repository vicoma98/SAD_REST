const {
    Response
} = require('../../frameworks/common');
module.exports = dependencies => {
    const {
        useCases: {
            carro: {
                addProductoCase
            }
        }
    } = dependencies;
    const addProducto = async(req, res, next) => {
        try {
            const body = JSON.parse(req.body);

            console.log(JSON.parse(req.body));
            console.log(req.body.name);


            const {
                cod,
                Nombre,
                Stock
            } = body;

            const addProducto = addProductoCase(dependencies);
            const response = await addProducto.execute({
                cod,
                Nombre,
                Stock
            });

            res.json(new Response({
                status: true,
                content: response
            }));

            next();


        } catch (err) {
            next(err);
        }

    }
    return addProducto;

}