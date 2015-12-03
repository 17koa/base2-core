var express       = require('express');
var path          = require('path');
var mount_routes  = require('mount-routes');
var mount_plugins = require('mount_plugin');
var app           = express();

var lifecycle     = require('./lifecycle');

app.set_absolute_path = function (key, path) {
  this.set(key, app.cfg.root + "/" + path); 
};

app.set_key_with_setting_key = function (key, setting_key) {
  var __path = path.join(app.cfg.root, app.cfg[setting_key]);
  
  if (app.debug) {
    console.log(key + " = " + __path); 
  }
  
  this.set(key, __path); 
};


/**
 * mount routes
 */ 
app.mount_routes = function (path) {
  mount_routes(this, path, this.debug);
}

/**
 * mount plugins
 */ 
app.mount_plugins = function (plugin_dir) {
  mount_plugins(this, plugin_dir, this.debug);
}

module.exports = function (config) {
  var deepExtend = require('deep-extend');
  deepExtend(app, {
    express: express
  });
  
  var cfg = {
    debug: false,
    favicon: 'favicon.ico',
    favicon_enable: false,
    post_enable: true,
    cookie_enable: true,
    log_enable: true,
    log_level: "dev",
    // "views": "views",
    // "routes": "routes",
    // "public": "public",
    pre: function (app) {
      if (app.debug) {
        console.log('pre hook');
      }
    },
    post: function (app) {
      if (app.debug) {
        console.log('post hook');
      }
    }
  }
  deepExtend(cfg, config);
  
  app.debug = cfg.debug;
  
  if(app.debug){
    app.set('root', path.join(__dirname, '../..'));
  }else{
    // xx/node_modules/base2/.
    app.set('root', path.join(__dirname, '../..'));
  }
  
  app.cfg = cfg;
  
  // init lifecycle
  var life = app.life = lifecycle(app);  
  // deepExtend(app, cfg);
  
  // hook_pre
  hook_pre(app);

  // settings
  life.settings();
  //
  // global middlewares
  life.global_middlewares();
  //
  // routes
  life.routes();

  // hook_post
  hook_post(app);
  
  return app;
};

function __set(app, k, v, default_v){
  app.set('port', v ? v : default_v);
}

function __call (config, key, app) {
  if (config[key]) {
    config[key](app);
  }
}

function hook_post (app) {
  __call(app.cfg, 'post', app);
}

function hook_pre (app) {
  __call(app.cfg, 'pre', app);
}
