const express = require('express');
const router = require('./router');
const app = express();

app.use(express.json())
app.use(router);
// estou dizendo para o app usar sempre o router

module.exports = app;