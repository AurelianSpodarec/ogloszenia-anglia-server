const express = require('express');
const app = express();

const userController = require('./controllers/userController')


app.disable('x-powered-by');


app.use('/', userController);

module.exports = app