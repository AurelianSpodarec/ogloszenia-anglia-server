class ElectronicsService {
    constructor(Electronics) {
        this.Electronics = this.Electronics;
    }

    listElectronics() {
        return this.Electronics.find({});
    }

    async getElectronic(electronicId) {
        return await this.Electronics.findById({ electronicId })
    }

    async createHome(obj) {
        const home = await new this.Electronics(obj);
        return home.save();
    }
}

module.exports = ElectronicsService;