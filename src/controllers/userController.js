const express = require('express')
const router = express.Router();
const { userService } = require('./../services')
const jwt = require('jsonwebtoken');
const catchExceptions = require('./../errors/CatchException');
const StatusError = require('./..//errors/StatusError');


router.get('/api/v1/users',
    catchExceptions(async (req, res) => {
        const users = await userService.listUsers();
        res.json(users)
    })
);

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

router.post('/api/v1/user/login',
    catchExceptions(async (req, res, next) => {

        const { email, password } = req.body;

        if (!email || !password) {
            return next(new StatusError("Please provide email and password", 400));
        }

        const user = await userService.getUserByEmail(email).select('+password');

        if (!user || !(await user.correctPassword(password, user.password))) {
            return next(new StatusError('Incorrect email or password', 401));
        }

        const token = signToken(user._id);

        res.status(201).json({
            status: 'success',
            token
        })
    })
);

router.post('/api/v1/user/signup',
    catchExceptions(async (req, res, next) => {
        const { firstName, lastName, email, password } = req.body;
        const user = await userService.registerUser(firstName, lastName, email, password);
        const token = signToken(user._id)
        res.status(201).json({
            status: 'success',
            token,
            data: {
                user
            }
        })
    })
);

router.get('/api/v1/user/:id',
    catchExceptions(async (req, res) => {
        const user = await userService.getUserById(req.params.id)
        res.json(user)
    })
);

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