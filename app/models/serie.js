var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SerieSchema = new Schema({
    nombre: String,
    descripcion: String,
    libros : [{
        nombre: String,
        publicacion: Number
    }]
});

module.exports = mongoose.model('Serie', SerieSchema);