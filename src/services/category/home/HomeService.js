class HomeService {
    constructor(HomeModel) {
        this.HomeModel = this.HomeModel;
    }

    listHomes() {
        return this.HomeModel.find({});
    }

    async getHome(homeId) {
        return await this.HomeModel.findById({ homeId })
    }

    async createHome(obj) {
        const home = await new this.HomeModel(obj);
        return home.save();
    }
}

module.exports = HomeService;