const express = require('express')
const { userService } = require('./../services')
const userController = require('./../controllers/userController')
const router = express.Router();

// router.get('/api/v1/users', async (req, res) => {
//     console.log("HIt")
//     const users = await userService.listUsers()
//     res.json(users)
// })




const a = []

router
    .route('/api/v1/users')
    .get(userController.listUsers);
// .post(a);


module.exports = router;