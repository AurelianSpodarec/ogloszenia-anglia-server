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

    async createElectronic(obj) {
        const electronic = await new this.Electronics(obj);
        return electronic.save();
    }
}

module.exports = ElectronicsService;