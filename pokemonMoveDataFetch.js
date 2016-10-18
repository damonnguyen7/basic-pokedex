const request = require('request');
const fs = require('fs');
const async = require('async');

function pickMoveData(moveResponse) {
  var moveData = {};
  moveData.name = moveResponse.name;
  moveData.id = moveResponse.id;
  moveData.pp = moveResponse.pp;
  moveData.priority = moveResponse.priority;
  moveData.accuracy = moveResponse.accuracy;
  moveData.power = moveResponse.power;
  return moveData;
}

var seriesRequests = [];
//http://pokeapi.co/api/v2/move/621/
for (var i = 0; i <= 621; i++) {
  var wrappedFunction = (function(index){
    return function(callback) {
      console.log('req #', index);
      request('http://pokeapi.co/api/v2/move/' + index + '/', function(error, response, results) {
        if (error) {
          callback(error);
        }
        var parseData = JSON.parse(results);
        parseData = pickMoveData(parseData);
        callback(null, parseData);
      });
    }
  })(i);
  seriesRequests.push(wrappedFunction);
}

async.series(seriesRequests, function(err, results) {
  if (err) {
    console.log('error:', err);
  } else {
    fs.writeFile('./moveData.json', JSON.stringify(results), function (err) {
      if (err){
        throw err;
        return;
      }
      console.log("pokémon data saved");
    });
  }
});
