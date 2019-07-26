const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css/')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js/')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist/')));


app.get('/', (req, res) => {
  // res.send('Welcome to node world');
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

dotenv.config();
const { PORT } = process.env || 4000;

app.listen(PORT, () => debug(chalk.green(`Server started @port ${PORT}`)));
