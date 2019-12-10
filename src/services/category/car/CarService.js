class CarService {
    constructor(CarModel) {
        this.CarModel = this.CarModel;
    }

    listCars() {
        return [{ "car": 'caa' }]
    }

    async getCarById(carId) {
        return await this.CarModel.findById(carId);
    }

    createCar(name, car, url) {
        return this.CarModel({ name, car, url }).save();
    }

}

module.exports = CarService;