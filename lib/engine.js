'use strict';

var jade = require('jade');
var path = require('path');

module.exports = function (app) {
  app.set('views', path.join(app.get('root'), app.get('views')));
  app.set('view engine', 'jade');
};
