const express = require('express')
const router = express.Router();
const { userService } = require('./../services')

router.get('/api/v1/users', async (req, res) => {
    const users = await userService.listUsers();
    res.json(users)
})

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