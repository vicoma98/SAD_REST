const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// definimos el schema
var frutaSch = new mongoose.Schema({
    cod: Number,
    Nombre: String,
    Stock: Number
});
const frutaM = mongoose.model('fruta', frutaSch);
module.exports = frutaM;