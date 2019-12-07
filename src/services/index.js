const UserService = require("./user/UserService")
const UserModel = require("./user/UserModel")
// console.log(UserModel)
module.exports = {
    userService: new UserService(UserModel)
}