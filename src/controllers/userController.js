const express = require('express')
const router = express.Router();
const { userService } = require('./../services');
const jwt = require('jsonwebtoken');
const catchExceptions = require('./../errors/CatchException');
const StatusError = require('./..//errors/StatusError');
const { promisify } = require('util');
const sendEmail = require('./../util/email');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

const protectedRoute = catchExceptions(async (req, res, next) => {

    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
        return next(new StatusError('You are not logged in. Please login to get access.', 401))
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

    const freshUser = await userService.getUserById(decoded.id);
    if (!freshUser) {
        return next(new StatusError('The user belonging to this token does not exist.', 401))
    }
    req.user = freshUser;
    next();
})

const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new StatusError("You don't have premission to perform this action", 403))
        }
        next();
    }
}



router.post('/api/v1/user/forgotPassword', catchExceptions(async (req, res, next) => {
    const user = await userService.getUserByEmail(req.body.email)
    if (!user) return next(new StatusError("There is no user with this email address", 404))

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    const resetURL = `${req.protocol}://${req.get(
        'host'
    )}/api/v1/user/resetPassword/${resetToken}`;
    console.log(resetURL)

    const message = `Forgot your password? Submit a PATCH reset with your new password and
    passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this
    email!`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Your password reset token(expires in 10minutes)',
            message
        });

        res.status(200).json({
            status: 'success',
            message: 'Token sent to email'
        })
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false })

        return next(new StatusError('There was an error sending the email try again later', 500))
    }
}));


// router.patch('/api/v1/user/resetPassword/:token',
//     catchExceptions(async (req, res) => {

//     })
// )



router.get('/api/v1/users',
    protectedRoute,
    restrictTo('admin', 'staff'),
    catchExceptions(async (req, res) => {
        const users = await userService.listUsers();
        res.json(users)
    })
);

router.get('/api/v1/user/:id',
    catchExceptions(async (req, res) => {
        const user = await userService.getUserById(req.params.id)
        res.json(user)
    })
);

router.delete('/api/v1/user/:id',
    protectedRoute,
    catchExceptions(async (req, res) => {
        const user = await userService.deleteUser(req.params.id)
        res.json(user)
    })
);

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

module.exports = router;