var express     = require('express');
var path        = require('path');

module.exports = function (app) {
  if (app.get('public')) {
    app.use(express.static(app.get('public')));
  }
}
