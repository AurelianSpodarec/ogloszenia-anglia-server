const express = require('express')
const router = express.Router();
const { carServices } = require('./../../services/category')

router.get('/api/v1/cars', async (req, res) => {
    const cars = carSerices.listCars()
    res.json(cars)
})

module.exports = router;