var app = require('./app');

app.start = app.listen;

// function () {
//   var port = app.get('port');
//   if (arguments.length >= 1) {
//     port = arguments[0];
//   }
//
//   if (!module.parent) {
//     return app.listen(port, function () {
//       console.log('Base2 start at port %d', app.get('port'));
//     });
//   }
//
//   process.on('uncaughtException', function (err) {
//     console.error('Uncaught exception:', err, err.stack);
//     // Exception
//     switch (err.errno) {
//       case 'EADDRINUSE': // 端口被占用
//         process.exit(5001);
//         break;
//       default:
//       //
//     }
//   });
// };


module.exports = app;
