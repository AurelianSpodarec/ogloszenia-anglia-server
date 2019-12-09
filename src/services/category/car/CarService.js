class CarService {
    constructor(CarModel) {
        this.CarModel = this.CarModel;
    }

    listCars() {
        return [{ "car": 'caa' }]
    }

}

module.exports = CarService;