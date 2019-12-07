class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
        // this.listUsers = this.listUsers.bind(this)
    }

    listUsers() {
        return this.UserModel;
    }

    getUserById(userId) {
        return this.UserModel.find(userId)
    }

    _extractFields(user, fields) {
        return "extract fields";
    }

    // getUserById = async (userId) => {
    //     return await this.User.findById(userId)
    // }

    // saveUser = async (user) => {
    //     await user.save();
    //     return user;
    // }

    // getUser = async (username, password) => {
    //     return await this.User.findOne({ username, password });
    // }



}

module.exports = UserService;