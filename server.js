#!/usr/bin/env node
var debug = require('debug')('client-tester');
var app = require('./app');
var port = require('config').get('port');
var server = app.listen(port, function() {
  debug('Express server listening on port ' + server.address().port);
  console.log('Express server listening on port ' + server.address().port);
});
