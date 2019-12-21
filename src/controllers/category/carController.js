const express = require('express')
const router = express.Router();
const { carService } = require('./../../services')

const StatusError = require('./../../errors/StatusError');
const catchExceptions = require('./../../errors/CatchException');


router.get('/api/v1/cars', async (req, res) => {
    const cars = await carService.listCars()
    res.json(cars)
})

// router.put('/api/v1/cars', async (req, res) => {
//     const createCar = carService.createCar(req.params.name)
// })

router.post('/api/v1/car',
    catchExceptions(async (req, res) => {
        const car = await carService.createCar(req.body)

        res.status(200).json({
            status: 'success',
            message: 'Car created',
            data: {
                car
            }
        })

        // createCar.save();
    })
);

router.get('/api/v1/car/:id',
    catchExceptions(async (req, res, next) => {
        const car = await carService.getCarById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                car
            }
        })
    })
);

module.exports = router;