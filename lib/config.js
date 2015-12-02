var express     = require('express');
var path        = require('path');

module.exports = function (app) {
  // app.use('/public', app.express.static(path.join(__dirname, '../public')));
  if (app.get('public')) {
    var www = path.join(app.get('root'), app.get('public'));
    console.log(www);
    app.use(express.static(www));
  }
}
