const express = require('express');
const app = express();

app.use('/items', require('./items/items'))

module.exports = app