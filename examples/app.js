var app = require('../')({
  // debug: true,
  root:__dirname,
  "views": "views",
  "routes": "routes2",
  "public": "public",
})

// console.log(base2);
// base2.mount_routes(__dirname + '/routes2');

app.start(3019);