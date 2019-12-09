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

}

module.exports = CarService;