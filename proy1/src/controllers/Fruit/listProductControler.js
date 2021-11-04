//no funcionara

const {
    Response
} = require('../../frameworks/common');
module.exports = dependencies => {
    const {
        useCases: {
            carro: {
                listProductoCase
            }
        }
    } = dependencies;
    const listProducto = async(req, res, next) => {
        try {
            const body = JSON.parse(req.body);

            console.log(JSON.parse(req.body));
            console.log(req.body.name);


            const {
                cod,
                Nombre,
                Stock
            } = body;

            const listProducto = listProductoCase(dependencies);
            const response = await listProducto.execute({
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
    return listProducto;

}