var app = require('../')({
  debug: true,
  pre: function (app) {
    app.set('root', __dirname);
    // console.log(app);
  },
  "views": "views",
  "routes": "routes",
  "public": "public",
})


// console.log(base2);
// base2.mount_routes(__dirname + '/routes2');

app.start(3019);