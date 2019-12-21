class CarService {
    constructor(CarModel) {
        this.CarModel = CarModel;
    }

    listCars() {
        const cars = this.CarModel.find({})
        return cars;
    }

    async getCarById(carId) {
        return await this.CarModel.findById(carId);
    }

    async createCar(title) {
        const car = await new this.CarModel({ title });
        return car.save();
    }

}

module.exports = CarService;