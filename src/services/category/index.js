const CarModel = require('./car/CarModel');
const CarService = require('./car/CarService')

module.exports = {
    carModel = new CarService(CarModel)
}