var path = require('path');
var favicon = require('serve-favicon');

module.exports = function (app) {
  var log_level = app.cfg.log_level;
  
  if (app.cfg['public'] && app.cfg['favicon_enable'] && app.cfg['favicon']) {
    var p = path.join(app.get('public'), app.cfg['favicon']);
    
    if (app.debug) {
      console.log('[DEBUG]: favicon = ' + p);
    }
    
    // uncomment after placing your favicon in /public
    app.use(favicon(p));
  }
};
