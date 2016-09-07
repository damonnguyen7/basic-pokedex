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

module.exports = app;