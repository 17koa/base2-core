var app = require('../')({
  debug: true,
  root:__dirname,
  "views": "examples/views",
  "routes": "examples/routes2",
  "public": "examples/public",
  before_settings: function(app) {
    // console.log(app)
    console.log('before_settings');
  }
})

module.exports = app;