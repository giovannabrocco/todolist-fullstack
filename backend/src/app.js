const express = require('express');
const app = express();
const router = require('./router');

app.use(router);
// estou dizendo para o app usar sempre o router

module.exports = app;