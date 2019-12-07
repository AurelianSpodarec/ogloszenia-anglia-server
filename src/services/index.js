const UserService = require("./user/UserService")
const { UserModel } = require("./user/UserModel")
const fs = require('fs')
const users = JSON.parse(
    fs.readFileSync(`./data/users.json`)
)

module.exports = {
    // userService: new UserService(UserModel)
    userService: new UserService(users)
}