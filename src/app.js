const express = require('express');
const app = express();

const { userController } = require('./controllers')


app.disable('x-powered-by');


app.use('/', userController);

module.exports = app