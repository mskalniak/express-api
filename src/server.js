var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');

var config = require('./config');
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUri, { useMongoClient: true });

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

var initRoutes = require('./routes/routes');
initRoutes(app);

var port = process.env.PORT || 3000;
app.listen(port);

console.log('RESTful API server started on: ' + port);
