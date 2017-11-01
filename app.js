var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect('mongodb://localhost/foundapidb');

/* === MODELOS === */
var Libro = require('./app/models/libro');
var Serie = require('./app/models/serie');

/* === MIDDLEWARE === */
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

/* === ROUTES === */
var router = express.Router();

router.get('/', function (req, res) {
  console.log('mw used');
  next();
});

//almacena un libro
//POST http://localhost:8008/api/libros
router.route('/libros').post(function (req, res) {
    var libro = new Libro();
    libro.nombre = req.body.nombre;
    libro.publicacion = req.body.publicacion;

    libro.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Libro creado!'});
    });
});

//obtiene todos los libros
//GET http://localhost:8008/api/libros
router.route('/libros').get(function (req, res) {
    Libro.find(function (err, libros) {
        if (err)
            res.send(err);
        res.json(libros);
    });
});

/*
opera segun id

http://localhost:8008/api/libros/:libro_id
*/
router.route('/libros/:libro_id')
    //get by id
    .get(function (req, res) {
        Libro.findById(req.params.libro_id, function (err, libro) {
            if (err)
                res.send(err);
            res.json(libro);
        });
    })
    //update by id
    .put(function (req, res) {
        Libro.findById(req.params.libro_id, function (err, libro) {
            if (err)
                res.send(err);

            libro.nombre = req.body.nombre;
            libro.publicacion = req.body.publicacion;

            libro.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Libro actualizado!'});
            })
        });
    })
    //delete by id
    .delete(function (req, res) {
        Libro.remove({
            _id: req.params.libro_id
        }, function (err, libro) {
            if (err)
                res.send(err);

            res.send({ message : 'Libro eliminado!'});
        });
    });

//prefix /api
app.use('/api', router);

/* === INICIAR SERVIDOR === */
var port = process.env.PORT || 8008;

app.listen(port, function() {
  console.log('Server Started on port:'+ port);
});
