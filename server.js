'use strict';

const express = require('express');
const app = express();
const logger = require('./src/middleware/logger');
const err404 = require('./src/error-handlers/404.js');
const err500 = require('./src/error-handlers/500.js');
const userValidation = require('./src/middleware/validator.js');



app.use(logger);


app.get('/', (req, res) => {
  res.status(200).send('Hello from the express method route')
});

app.get('/person', userValidation, (req, res) => {
  res.send('hello from person route');
});

app.use(err404);
app.use(err500);

module.exports = app;