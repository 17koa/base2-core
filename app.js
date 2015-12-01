var express     = require('express');
var bodyparser  = require('body-parser');
var path        = require('path');
var mount       = require('mount-routes');
var app         = express();

module.exports = function (config) {
  var deepExtend = require('deep-extend');
  deepExtend(app, {
    express: express
  });
  
  var cfg = {
    debug:false,
    pre: function (app) {
      console.log('pre');
    },
    post: function (app) {
      console.log('post');
    }
  }
  deepExtend(cfg, config);
  
  if(app.debug){
    app.set('root', path.join(__dirname, '../..'));
  }else{
    // xx/node_modules/base2/.
    app.set('root', path.join(__dirname, '../..'));
  }
  
  deepExtend(app, cfg);
  
  // hook_pre
  hook_pre(cfg, app);

  // settings
  _settings(app);
  
  // global middlewares
  _global_middlewares(app);
  
  // routes
  _routes(app);

  // hook_post
  hook_post(cfg, app);
  
  return app;
};

/**
 * basic settings
 */ 
function _settings(app){
  app.set('port', 8001);
  
}

/**
 * global middlewares
 */ 
function _global_middlewares(app){
  app.use('/public', express.static(path.join(__dirname, '../public')));
  app.use(bodyparser.urlencoded({ extended: false }));
  
  require('./lib')(app);
}

/**
 * routes
 */ 
function _routes(app){
  app.mount_routes = function (path) {
    // with path & api dump
    // console.log(app);
    // console.log(this);
    mount(this, path, true);
  }
}

function __set(app, k, v, default_v){
  app.set('port', v ? v : default_v);
}

function __call (config, key, app) {
  if (config[key]) {
    config[key](app);
  }
}

function hook_post (config, app) {
  __call(config,'post', app);
}

function hook_pre (config, app) {
  __call(config,'pre', app);
}