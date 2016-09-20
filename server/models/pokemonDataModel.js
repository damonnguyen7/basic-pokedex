const request = require('request');
const Promise = require('promise');

var getPokemonData = function(pokemon) {
  return new Promise(function(resolve, reject) {
    var arrayOfPokemon = [];
    for (var i = 1; i < pokemon.length; i++) {
      (function(i){
        var url = 'http://pokeapi.co/api/v2/pokemon/' + i + '/';
        request(url, function(error, response, data) {
          if (error) {
            reject(error);
          } else {
            data = JSON.parse(data);
            var pokemonObj = {};
            pokemonObj.id = data.id;
            pokemonObj.name = data.name[0].toUpperCase() + data.name.slice(1);
            pokemonObj.height = data.height;
            pokemonObj.weight = data.weight;
            pokemonObj.stats = data.stats.map(function(statType) {
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
            pokemonObj.moves = data.moves.map(function(moveObj) {
              return moveObj.move.name;
            });
            arrayOfPokemon.push(pokemonObj);
            if (arrayOfPokemon.length === 9) {
              resolve({
                data: {pokemonData: arrayOfPokemon}
              });
            }
          }
        });
      })(i)
    }
  })
}

module.exports = getPokemonData;
