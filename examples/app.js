var base2 = require('../')({
  
})


console.log(base2);
base2.mount_routes(__dirname + '/routes2');

base2.start(3019);