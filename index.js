var app = require('./app');
if (!module.parent) {
	app.listen(app.get('port'), function(){
		console.log('Base2 start at port %d', app.get('port'));
	});
}

process.on('uncaughtException', function (err) {
  console.error('Uncaught exception:', err, err.stack);
  // Exception
  switch (err.errno) {
    case 'EADDRINUSE': // 端口被占用
      process.exit(5001);
      break;
    default:
    //
  }
});

module.exports 
