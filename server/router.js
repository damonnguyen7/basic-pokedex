const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//MIDDLEWARE:

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../assets')));

app.get('/', function(req, res) {
  console.log('logging on path /!');
  res.sendFile(__dirname + '/assets/index.html');
});

module.exports = app;