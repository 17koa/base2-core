var express     = require('express');
var path        = require('path');

module.exports = function (app) {
  console.log(app.get('root'));
   // app.use('/public', app.express.static(path.join(__dirname, '../public')));
   var www = path.join(app.get('root'), 'public');
   
   app.use(express.static(www));
}
