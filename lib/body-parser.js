var bodyParser = require('body-parser');

module.exports = function (app) {
  var post_enable = app.cfg.post_enable;
  
  if (post_enable == true) {
    if (app.debug) {
      console.log('[DEBUG]: post_enable = ' + post_enable);
    }
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  }
};
