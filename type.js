var express       = require('express');
var koa           = require('koa');

module.exports = function (config) {
  console.log(config)
  if(config.type == 'express'){
    return express();
  }else if(config.type == 'koa'){
    return koa();
  }
  
  return express();
}