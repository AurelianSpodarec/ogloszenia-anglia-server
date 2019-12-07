class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
        // this.listUsers = this.listUsers.bind(this)
    }

    async listUsers() {
        const users = await this.UserModel.find()
        return users;
    }

    getUserById(userId) {
        return this.UserModel.find(user => user.id === userId);
    }

    _extractFields(user, fields) {
        return "extract fields";
    }
}

module.exports = UserService;