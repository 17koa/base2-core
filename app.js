var express     = require('express');
var bodyparser  = require('body-parser');
var path        = require('path');
var mount       = require('mount-routes');
var app         = express();

var base_dir = __dirname.split('node_modules');

// app._init();

app.set('port', 8001);
app.set('root', path.join(__dirname, '..'));

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use(bodyparser.urlencoded({ extended: false }));

// simple
// mount(app);

// with path
// mount(app, 'routes2');
require('./lib')(app);


app.set('routes_path', '');

app.mount_routes = function (path) {
  // with path & api dump
  // console.log(app);
  // console.log(this);
  mount(this, path, true);
}

// app.mount_routes('routes2');

app.set_path = function () {
  
}

module.exports = function (config) {
  var deepExtend = require('deep-extend');
  deepExtend(app, config);
  
  return app;
};

