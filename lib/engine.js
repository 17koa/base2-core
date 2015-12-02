'use strict';

var jade = require('jade');
var path = require('path');

module.exports = function (app) {
  if (app.debug) {
    console.log(app.get('views'));
  }
  
  if (app.get('views')) {
    app.set('views', app.get('views'));
    app.set('view engine', 'jade');
  }
};
