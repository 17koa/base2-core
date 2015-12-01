'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.locals.tpl = 'index';
	next();
});

module.exports = function (app) {
  // console.log('app');
  return router;
}
