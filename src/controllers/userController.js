const express = require('express')
const router = express.Router();
const { userService } = require('./../services')
const jwt = require('jsonwebtoken');


router.get('/api/v1/users', async (req, res) => {
    const users = await userService.listUsers();
    res.json(users)
})

router.post('/api/v1/user', async (req, res) => {
    try {
        const { firstName } = req.body;
        const user = await userService.createUser(firstName);
        res.status(201).json({
            status: 'success',
            data: {
                user
            }
        })

    } catch (err) {

        res.status(400).json({
            status: "fail",
            message: err
        })
    }
})

router.get('/api/v1/user/:id', async (req, res) => {
    const user = await userService.getUserById(req.params.id)
    res.json(user)
})

// router.post('/api/v1/user/signup', async (req, res) => {
//     const newUser = await userService.createUser({
//         firstName: req.body.firstName,
//         email: req.body.email,
//         password: req.body.password,
//         passwordConfirm: req.body.passwordConfirm
//     });

//     const token = jwt.sign({ id: newUser._id }, process, env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRES_IN
//     });

//     res.status(201).json({
//         status: 'success',
//         token,
//         data: {
//             user: newUser
//         }
//     })
// })

module.exports = router;










// const router = require("express").Router();
// const { userService } = require("./services");

// router.get("/api/v1/users", (req, res) => {
//     const userList = userService.getUsers();

//     res.json(userList);
// })


// const { userService } = require('./../services')
// // module.exports = router;

// const listUsers = async (req, res) => {
//     const users = await userService.listUsers()
//     res.json(users)
// }

// module.exports = {
//     listUsers
// }

// exports.getAllTours = catchAsync(async (req, res, next) => {
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate();
//     const tours = await features.query;

//     // SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   });