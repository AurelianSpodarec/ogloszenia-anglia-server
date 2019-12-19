const express = require('express');
const app = express();
app.use(express.json());

const { userController, homeController, carController } = require('./controllers')

//TODO: Delete this and add an ENV or PROD code
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.disable('x-powered-by');

app.use('/', userController, homeController, carController);

app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.statusCode || 500).json({ message: error.message });
});

module.exports = app;