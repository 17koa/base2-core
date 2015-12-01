var base2 = require('../')({
  debug: true,
  pre: function (app) {
    app.set('root', __dirname);
    // console.log(app);
  },
  routes:"routes2"
})


// console.log(base2);
// base2.mount_routes(__dirname + '/routes2');

base2.start(3019);