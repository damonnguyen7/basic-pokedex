const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//MIDDLEWARE:

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
  res.sendFile('/assets/index.html');
});

//route controllers
const getPokemonData = require('./controllers/getPokemon');


//Handle POST request:
app.post('/home', getPokemonData.post);

module.exports = app;