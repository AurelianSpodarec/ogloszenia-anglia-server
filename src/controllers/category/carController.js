const express = require('express')
const router = express.Router();
const { carService } = require('./../../services/category')

router.get('/api/v1/cars', async (req, res) => {
    const cars = await carService.listCars()
    res.json(cars)
})

module.exports = router;