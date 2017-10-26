var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foundapidb');

var Libro = require('./app/models/libro');
var Serie = require('./app/models/serie');

var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8008;

/* === ROUTES === */
var router = express.Router();

router.get('/', function (req, res) {
  res.json({ message : 'Hola universo' });
});

app.use('/api', router);

/* === INICIAR SERVIDOR === */
app.listen(port, function() {
  console.log('Server Started on port 3000');
});