"use strict";

module.exports = function (app) {
	app.use('/', require('./gauth'));
	app.use('/', require('./notfound'));
};