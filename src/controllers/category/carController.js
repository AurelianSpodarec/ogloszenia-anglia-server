const express = require('express')
const router = express.Router();
const { carService } = require('./../../services')

const StatusError = require('./../../errors/StatusError');
const catchExceptions = require('./../../errors/CatchException');
const multer = require('multer');

// const upload = multer({ dest: 'public/img/users' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})

const upload = multer({ storage });

router.get('/api/v1/cars', async (req, res) => {
    const cars = await carService.listCars()
    res.json(cars)
})

router.post('/api/v1/car',
    upload.single('coverImage'),
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