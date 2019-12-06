class UserService {
    constructor(User) {
        this.User = User;
        this.getUsers = this.getUsers.bind(this)
    }

    // getUsers = async (users) => {
    //     // await this.Userss
    //     return users;
    // }

    async getUsers(users) {
        await this.Users
        return users
    }

    // saveUser = async (user) => {
    //     await user.save();
    //     return user;
    // }

    // getUser = async (username, password) => {
    //     return await this.User.findOne({ username, password });
    // }

    // getUserById = async (userId) => {
    //     return await this.User.findById(userId)
    // }

}

module.exports = UserService