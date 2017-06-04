'use strict'
const Express = require('express');

module.exports = function (models) {

  var app = Express();

  app.get('/api/productos', function (req, res) {

    models.Productos.findAll()
      .then(function(result) {
        var list = [];
        for (var index in result) {
          list.push(result[index].dataValues);
        }
        res.status(200).json(list).end();
      })
      .catch(function(err) {
        res.status(500).json({ message : err}).end();
      });
  });

  app.get('/api/productos/:id', function (req, res) {

    models.Productos.findById(parseInt(req.params.id))
      .then(function (result){
        res.status(200).json(result.dataValues).end();
      })
      .catch(function(err) {
        res.status(500).json({ message : err }).end();
      });
  });

  app.post('/api/productos', function (req, res) {
    models.Productos.create(req.body)
      .then(function (result) {
        res.status(200).json(result).end();
      })
      .catch(function (err) {
        res.status(500).json({message : err}).end();
      })
  });

  app.put('/api/productos/:id', function (req, res) {

    models.Productos.findById(req.params.id)
      .then(function (instance) {
        instance.update(req.body)
          .then(function (result) {
            res.status(200).json(result).end();
          })
          .catch(function (err) {
            res.status(500).json({ message : err }).end();
          });
      });
  });

  app.delete('/api/productos/:id', function (req, res) {

    models.Productos.findById(parseInt(req.params.id))
      .then(function(result) {
        result.destroy()
          .then(function (result) {
            res.status(200).json(result).end();
          })
          .catch(function (err) {
            res.status(500).json({ message : err }).end();
          });
      })
      .catch(function (err) {
        res.status(500).json({ message : err }).end();
      });
  });
  return app;

}
