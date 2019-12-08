class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
        // this.listUsers = this.listUsers.bind(this)
    }

    async listUsers() {
        const users = await this.UserModel.find()
        return users;
    }

    async getUserById(userId) {
        const user = await this.UserModel.findById(userId)
        return user;
    }

    _extractFields(user, fields) {
        return "extract fields";
    }
}

module.exports = UserService;