'use strict';

var jade = require('jade');
var path = require('path');

module.exports = function (app) {
  console.log(app.get('views'))
  app.set('views', app.get('views'));
  app.set('view engine', 'jade');
};
