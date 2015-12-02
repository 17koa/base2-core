var bodyparser    = require('body-parser');
var path          = require('path');

module.exports = function (app) {
  return {
    /**
     * basic settings
     */ 
     settings: function () {
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
    },

    /**
     * global middlewares
     */ 
    global_middlewares: function () {
      app.use(bodyparser.urlencoded({ extended: false }));
  
      app.mount_plugins(path.join(__dirname, 'lib'));
    },

    /**
     * routes
     */ 
    routes: function () {
  
    }
  }
}
