var cookieParser = require('cookie-parser');

module.exports = function (app) {
  var cookie_enable = app.cfg.cookie_enable;
  
  if (app.cfg['cookie_enable'] == true) {
    if (app.debug) {
      console.log('[DEBUG]: cookie_enable = ' + cookie_enable);
    }
    
    app.use(cookieParser());
  }
};
