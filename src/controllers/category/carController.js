const express = require('express')
const router = express.Router();
const { carService } = require('./../../services')

router.get('/api/v1/cars', async (req, res) => {
    const cars = await carService.listCars()
    res.json(cars)
})

router.put('/api/v1/cars', async (req, res) => {
    const createCar = carService.createCar(req.params.name)
})

router.get('/api/v1/car/:id', async (req, res) => {
    const car = await carService.getCarById(req.params.id)
    res.json(car)
})

module.exports = router;