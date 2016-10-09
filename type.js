var express       = require('express');
var Koa           = require('koa');

module.exports = function (config) {
  console.log(config)
  var app = express()
  
  if(config.type == 'koa2'){
    app = new Koa();
    app.settings=[];
    
    app.set = function(k, v){
      app.settings[k] = v;
    }
    
    app.get = function(k){
      return app.settings[k];
    }
  }
 
  if(config.type == 'koa'){
    app =  Koa();
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