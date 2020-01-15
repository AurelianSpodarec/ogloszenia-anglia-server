// class CarService {
//     constructor(CarModel) {
//         this.CarModel = CarModel;
//     }

//     listCars() {
//         const cars = this.CarModel.find({})
//         return cars;
//     }

//     async getCarById(carId) {
//         // const car = await this.CarModel.findById(carId).populate({
//         //     path: "userId",
//         //     select: "-__v -passwordChangedAt -deleted -createdAt -emailVerified",
//         // });
//         const car = await this.CarModel.findById(carId)
//         console.log("MMMMMMMMMMMMMMMM CAR", car)

//         if (!car) {
//             return next(new StatusError("No car found with this ID", 404))
//         }

//         return car;
//     }

//     async createCar(obj) {
//         const car = await new this.CarModel(obj);
//         return car.save();
//     }

// }

// module.exports = CarService;

class CarService {
    constructor(CarModel) {
        this.CarModel = CarModel;
    }


    listLength() {
        const length = this.CarModel.count({})
        return length;
    }
    listCars() {
        const cars = this.CarModel.find({})
        return cars;
    }

    async getCarById(carId) {
        // console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM", this.CarModel.findById(carId))
        const car = await this.CarModel.findById(carId)
        // .populate({
        //     path: "userId",
        //     select: "-__v -passwordChangedAt -deleted -createdAt -emailVerified",
        // });
        console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMM", car)

        if (!car) {
            return next(new StatusError("No car found with this ID", 404))
        }

        return car;
    }

    async createCar(obj) {
        const car = await new this.CarModel(obj);
        return car.save();
    }

}

module.exports = CarService;