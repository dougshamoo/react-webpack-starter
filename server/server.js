const express = require('express');
const app = express();

// MIDDLEWARE

app.use(express.static(__dirname + '/../client'));

module.exports = app;
