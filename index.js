var path        = require('path');
var express     = require('express');
var router      = express.Router();

function app(config) {
  var app = require('./app')(config);
  // start server
  app.start = app.run = app.listen;
  // export router api
  app.router = router;
  
  return app;
};

app.router = router;

module.exports = app;