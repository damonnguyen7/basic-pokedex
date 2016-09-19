var getPokemon = require('../models/pokemonDataModel');

exports.post = function(req, res) {
  // console.log('list of pokemon names: ', req.body.data);
  var listOfPokemon = req.body.data;
  getPokemon(listOfPokemon)(res)
    .then(function(data) {
      console.log('working inside of promise')
      console.log('all pokemon data object: ', data.data);
    })
}