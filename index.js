var path        = require('path');
var express     = require('express');

function main(config) {
  var app = require('./app')(config);
  // start server
  app.start = app.run = app.listen;
  // export router api
  app.router = router;
  
  return app;
};

main.router = function (){
  return express.Router();
};

module.exports = main;