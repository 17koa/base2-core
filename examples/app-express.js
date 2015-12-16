var app = require('../')({
  debug: true,
  type:"express",
  root:__dirname,
  "views": "views",
  "routes": "routes",
  "public": "public",
  // favicon: 'images/favicon.ico',
//   favicon_enable: true,
  before_settings: function(app) {
    // console.log(app)
    console.log('before_settings');
  }
})

// console.log(app);
// app.mount_routes(__dirname + '/routes2');
// app.mount_plugins(__dirname + '/plugins');

app.start(3019);

module.exports = app;
