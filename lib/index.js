
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var config = require('./config');
var router = require('./router');
var render = require('./render');
var engine = require('./engine');

var app = express();

app.set('port', 8001);
app.set('root', path.join(__dirname, '..'));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(router());
app.use(engine(app));
app.use(render());


module.exports = app;