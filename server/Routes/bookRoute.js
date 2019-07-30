const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.render('books', {
    title: 'Welcome to Book Library',
    nav: [
      { link: '/', title: 'Home' },
      { link: '/about', title: 'About' },
      { link: '/books', title: 'Books' },
      { link: '/author', title: 'Author' },
    ],
  });
});

route.get('/single', (req, res) => {
  res.send('Hello  single books');
});

module.exports = route;
