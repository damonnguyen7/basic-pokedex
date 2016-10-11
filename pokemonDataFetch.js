const request = require('request');
const fs = require('fs');
const async = require('async');

function pickOffValues(pokemonResponse){
  var pokemonObj = {};
  pokemonObj.id = pokemonResponse.id;
  pokemonObj.name = pokemonResponse.name[0].toUpperCase() + pokemonResponse.name.slice(1);
  pokemonObj.height = pokemonResponse.height;
  pokemonObj.weight = pokemonResponse.weight;
  pokemonObj.stats = pokemonResponse.stats.map(function(statType) {
    if (statType.stat.name === 'hp') {
      return ['hp', statType.base_stat];
    } else if (statType.stat.name === 'attack') {
      return ['attack', statType.base_stat];
    } else if (statType.stat.name === 'defense') {
      return ['defense', statType.base_stat];
    } else if (statType.stat.name === 'speed') {
      return ['speed', statType.base_stat];
    } else if (statType.stat.name === 'special-attack') {
      return ['special-attack', statType.base_stat];
    } else if (statType.stat.name === 'special-defense') {
      return ['special-defense', statType.base_stat];
    } 
  });
  pokemonObj.moves = pokemonResponse.moves.map(function(moveObj) {
    return moveObj.move.name;
  });
  return pokemonObj;
}

var seriesRequests = [];

for(var i = 1; i <= 151; i++){
  var wrappedFunction = (function(index){
    return function (callback) {
      console.log('req #', index);
      request('http://pokeapi.co/api/v2/pokemon/' + index + '/', 
      function(error, response, data) {
        if (error) {
          callback(error);
          return;
        }
        var parsedJson = JSON.parse(data);
        // var newPokemonObj = pickOffValues(parsedJson);
        callback(null, parsedJson);
      });
    };
  })(i);
  seriesRequests.push(wrappedFunction);
}

async.series(seriesRequests, function(err, results) {
  if (err) {
    console.log('error:', err);
  } else {
    fs.writeFile('./pokemonFullData.json', JSON.stringify(results), function (err) {
      if (err){
        throw err;
        return;
      }
      console.log("pokémon data saved");
    });
  }
});
