const UserService = require("./UserService")

const { User } = require("../models")

const userService = new UserService(User);

module.exports = {
    userService
}