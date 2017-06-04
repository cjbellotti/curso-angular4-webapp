'use strict'
const Sequelize = require('sequelize');

module.exports = function (connection) {

  var models = {};

  models.Productos = connection.define('productos', {
    id : {
      type : Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    nombre : Sequelize.STRING,
    descripcion : Sequelize.STRING,
    precio : Sequelize.STRING,
    imagen : Sequelize.STRING
  });

  return models;
}
