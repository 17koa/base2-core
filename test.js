var lib = require('./lib');

var app = require('express')();
console.log(app);
console.log(lib);

for(var k in lib){
  var v = lib[k];
  console.log(v);
  
  console.log(v(app));
}