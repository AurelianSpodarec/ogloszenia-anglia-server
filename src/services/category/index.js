const CarModel = require('./car/CarModel');
const CarService = require('./car/CarService');

const HomeModel = require('./home/HomeModel');
const HomeService = require('./home/HomeService');

module.exports = {
    carService: new CarService(CarModel),
    homeService: new HomeService(HomeModel)
}