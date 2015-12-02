var path        = require('path');

function main(config) {
  var app = require('./app')(config);
  // start server
  app.start = app.run = app.listen;
  
  return app;
};

module.exports = main;