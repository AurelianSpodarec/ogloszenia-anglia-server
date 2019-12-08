class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
        this.listUsers = this.listUsers.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.getUser = this.getUser.bind(this);
    }

    async listUsers() {
        return await this.UserModel.find()
    }

    async getUserById(userId) {
        return await this.UserModel.findById(userId);
    }

    async getUser(username, password) {
        return await this.UserModel.findOne({ username, password })
    }

    _extractFields(user, fields) {
        return "extract fields";
    }
}

module.exports = UserService;