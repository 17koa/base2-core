var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
var lib = require('./lib');

app.set('port', 8001);
app.set('root', path.join(__dirname, '..'));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use(bodyparser.urlencoded({ extended: false }));
 
for(var k in lib){
  var v = lib[k];
  
  if(v){
    var middleware = v(app);
    
    if(middleware){
      app.use(middleware);
    }else{
      console.log('empty middleware');
    }
  }
}

module.exports = app;