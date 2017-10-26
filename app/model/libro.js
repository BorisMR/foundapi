var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema = new Schema({
    nombre: String,
    publicacion: Number
});

module.exports = mongoose.model('Libro', LibroSchema);