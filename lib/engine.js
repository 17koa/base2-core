'use strict';

var jade = require('jade');
var path = require('path');

module.exports = function (app) {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    return function(req, res, next) {
        next();
    };
};
