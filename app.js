//require('./api/data/db.js');
var express = require('express');
var app     = express();
var port    = process.env.PORT || 2020;
var path = require('path');
var route   = require('./api/routes');
var bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/api',route);

app.listen(port);

console.log('successfully connected to port '+ port );