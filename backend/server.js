'use strict'
const Sequelize = require('sequelize');
const Express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const port = process.env.PORT || 3000;

const connection = new Sequelize('cursoangular4', 'angular4', '12345678', {
  host : 'localhost',
  dialect : 'mysql'
});

const models = require('./models/models')(connection);

const app = Express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(require('./services')(models));

connection.sync().then(() => {
  app.listen(port, function() {
    console.log(`Server listening on port ${port}...`);
  })
});
