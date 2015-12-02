var path        = require('path');
var express     = require('express');
var router      = express.Router();

function main(config) {
  var app = require('./app')(config);
  // start server
  app.start = app.run = app.listen;
  // export router api
  app.router = router;
  
  return app;
};

main.router = router;

module.exports = main;