var path        = require('path');
var express     = require('express');
var router      = express.Router();
var meld        = require('meld');

function app(config) {
  var app = require('./app')(config);
  // start server
  app.start = app.run = app.listen;
  // export router api
  app.router = router;
  
  return app;
};

function _aop(app){
  // Call a function after myObject.doSomething returns
  meld.after(app, 'doSomething', function(result) {
      console.log('myObject.doSomething returned: ' + result);
  });
  
}

app.router = router;

module.exports = app;