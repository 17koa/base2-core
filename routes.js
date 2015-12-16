var mount_express_routes  = require('mount-routes');
var mount_koa_routes      = require('mount-koa-routes');

module.exports = function (config) {
  var mount_routes = mount_express_routes;
  
  if(config.type == 'koa'){
    mount_routes = mount_koa_routes;
  }
  
  return mount_routes;
}