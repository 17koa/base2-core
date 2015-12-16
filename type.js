var express       = require('express');
var koa           = require('koa');

module.exports = function (config) {
  console.log(config)
  var app = express();
  
  if(config.type == 'koa'){
    app =  koa();
    app.settings=[];
    
    app.set = function(k, v){
      app.settings[k] = v;
    }
    
    app.get = function(k){
      return app.settings[k];
    }
  }
  
  return app;
}