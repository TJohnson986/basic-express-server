'use strict';

const express = require('express');
const logger = require('./src/middleware/logger');

const app = express();

app.use(logger);

app.use((req, res) => {

});

app.get('/', (req, res) => {
  res.send('Hello from the express method route');
});

module.exports = app;