const express = require('express');
const app = express();

const { userController, homeController, carController } = require('./controllers')


app.disable('x-powered-by');


app.use('/', userController, homeController, carController);
// app.use('/', userController);

app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.statusCode || 500).json({ message: error.message });
});

module.exports = app