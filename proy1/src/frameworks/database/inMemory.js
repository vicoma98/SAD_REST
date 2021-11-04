//hay que hacer ek buscar
async function Buscar(evento) {
    const client = new MongoClient(uri);
    try {

        await client.connect();
        const database = client.db("test");
        const frutas = database.collection("frutas");
        const fruta = await frutas.findOne({ Nombre: evento });
        if (fruta === null) {
            return false;
        }
        const n = fruta.Stock;
        if (n > 0) {
            return true
        } else {
            return false
        }
    } catch (e) {
        console.error(e)
    } finally {
        await client.close();
    }

}
module.exports = {
    carrito: [],
    Buscar
}