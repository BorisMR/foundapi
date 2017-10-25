var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var express = require('express');
var app = express();

app.listen(3000, function() {
  console.log('Server Started on port 3000');
});