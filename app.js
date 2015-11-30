var express     = require('express');
var bodyparser  = require('body-parser');
var path        = require('path');
var mount       = require('mount-routes');
var app         = express();


app.set('port', 8001);
app.set('root', path.join(__dirname, '..'));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use(bodyparser.urlencoded({ extended: false }));

// simple
// mount(app);

// with path
// mount(app, 'routes2');
require('./lib')(app);
// with path & api dump
mount(app, 'routes2', true);


module.exports = app;

