var getPokemon = require('../models/pokemonDataModel');
var requireRedis = require('redis');
var redis = requireRedis.createClient(6379, 'localhost');

exports.post = function(req, res) {
  var listOfPokemon = req.body.data;
  var key = 'orginalPokemon';

  // redis.del(key);

  redis.get(key, function(error, result) {
    res.setHeader('Content-Type', 'application/json');
    if (result) {
      console.log('successfully retrieve from redis database');
      console.log('data retrieved from redis database: ', JSON.parse(result).pokemonData.length);
      res.send(JSON.parse(result));
      res.end();
    } else {
      getPokemon(listOfPokemon)
        .then(function(respond) {
          console.log('redis.set data in controller');
          redis.set(key, JSON.stringify(respond.data));
          redis.expire(key, 14400);
          res.send(respond.data);
          res.end();
        })
        .catch(function(error) {
          res.setHeader('Content-Type', 'application/text');
          res.status(500).send('Internal server error');
        });
    }
  })
}
