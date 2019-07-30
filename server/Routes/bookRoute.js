const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.send('Hello  all books');
});

route.get('/single', (req, res) => {
  res.send('Hello  single books');
});

module.exports = route;
