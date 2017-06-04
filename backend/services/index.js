'use strict'
const Express = require('express');

module.exports = function (models) {

  var app = Express();

  app.use(require('./productos')(models));

  return app;

}
