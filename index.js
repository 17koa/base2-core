var path        = require('path');

module.exports = function (config) {
  var app = require('./app')(config);
  
      
  app.start = app.listen;
  
  return app;
};
