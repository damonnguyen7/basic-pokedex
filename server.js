const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const pokemonData = require('./pokemonData.json');

app.set('view engine', 'hbs');

//MIDDLEWARE:
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.render('layout', {
    pokemonData: JSON.stringify(pokemonData)
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server up running on localhost:' + port);
});
