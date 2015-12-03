var logger = require('morgan');

module.exports = function (app) {
  var log_level = app.cfg.log_level;
  
  if (app.cfg['log_enable'] == true) {
    if (app.debug) {
      console.log('[DEBUG]: log_level = ' + log_level);
    }
    
    app.use(logger(log_level));
  }
};
