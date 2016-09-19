const request = require('request');
const Promise = require('promise');

var getPokemonData = function(pokemon) {

  return function(res) {
    return new Promise(function(resolve, reject) {
      for (var i = 1; i < pokemon.length; i++) {
        var url = 'http://pokeapi.co/api/v2/pokemon/' + i + '/';
        request(url, function(error, response, data) {
          if (error) {
            reject(error);
          } else {
            //NEED TO FILTER DATA
            resolve({
              respond: res.send(JSON.parse(data)),
              data: data
            });
          }
        });
      }
    })
  }
}

module.exports = getPokemonData;
