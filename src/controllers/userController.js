const router = require("express").Router();

// const User = require("../models/UserModel");
const { userService } = require("./services");

router.get("/api/v1/users", (req, res) => {
    const userList = userService.getUsers();

    res.json(userList);
})

// router.get("/api/v1/user/:id"), (req, res) => {
//     const user = userService.getUser(res.param.id)
// }

module.exports = router;