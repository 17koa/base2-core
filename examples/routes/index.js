var router = require('koa-router')();

// console.dir(router)
/* GET home page. */
router.get('/',  (ctx, next) => {
  return ctx.render('index', { title: 'Express' });
});

module.exports = router;
