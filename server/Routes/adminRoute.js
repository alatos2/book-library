const express = require('express');
const debug = require('debug')('app:adminRoute');

const { MongoClient } = require('mongodb');

const books = [
  {
    title: 'Kole the super star', genre: 'Historical Fiction', author: 'Stan Robin Vanin', read: false,
  },
  {
    title: 'Ade our naughty little brother', genre: 'Historical Fiction', author: 'Yemisi Scofield', read: false,
  },
  {
    title: 'Ralia the salt girl', genre: 'Historical Fiction', author: 'Verim Fauseert', read: false,
  },
];

const route = express.Router();

route.get('/', (req, res) => {
  const url = 'mongodb://localhost:27017';
  const dbName = 'libraryApp';

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      debug('Connection Successful');

      const db = client.db(dbName);
      const response = await db.collection('books').insertMany(books);
      res.json(response);
    } catch (err) {
      debug(err.stack);
    }
    client.close();
  }());
});

module.exports = route;
