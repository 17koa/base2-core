function mount_lib (app) {
  var requireDirectory = require('require-directory');
  var lib = requireDirectory(module, '.');
  
  for(var k in lib){
    var v = lib[k];
  
    if(v){
      var middleware = v(app);
    
      if(middleware){
        app.use(middleware);
      }else{
        if (app.debug) {
          console.log('empty middleware');
        }
      }
    }
  }
}

// exports
module.exports = mount_lib;