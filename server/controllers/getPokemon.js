var getPokemon = require('../models/pokemonDataModel');

exports.post = function(req, res) {
  var listOfPokemon = req.body.data;
  listOfPokemon = listOfPokemon.slice(0, 10);

  //set header
  res.setHeader('Content-Type', 'application/json');

  getPokemon(listOfPokemon)
    .then(function(respond) {
      console.log('successfully send data to client!');
      res.send(respond.data);
      res.end();
    });

}