var bodyparser    = require('body-parser');
var path          = require('path');

module.exports = function (app) {
  return {
    /**
     * basic settings
     */ 
    settings: function () {
      this._before('settings');
      var cfg = app.cfg;
      app.set('port', 8001);
  
      // app.set('www', app.get('root') + "/" + app.get('public')); 
      if (cfg.public) {
        app.set_key_with_setting_key('public', 'public');
      }
  
      if (cfg.views) {
        app.set_key_with_setting_key('views', 'views');
      }
  
      if (cfg.routes) {
        app.set('routes', cfg.routes);
        app.mount_routes(app.cfg.root + "/" + cfg.routes, app.debug);
      }
      
      this._after('settings');
    },

    /**
     * global middlewares
     */ 
    global_middlewares: function () {
      this._before('global_middlewares');
      app.use(bodyparser.urlencoded({ extended: false }));
  
      app.mount_plugins(path.join(__dirname, 'lib'));
      this._after('global_middlewares');
    },

    /**
     * routes
     */ 
    routes: function () {
      this._before('routes');
      // ...
      this._after('routes');
    },
    _call:function(type,method){
      var cfg = app.cfg;
      var m = cfg[type + '_' + method];
      if (m) {
        m(app);
      }
    },
    _before:function(method){
      this._call('before', method);
    },
    _after:function(method){
      this._call('after', method);
    }
  }
}