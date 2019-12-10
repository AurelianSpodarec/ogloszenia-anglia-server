const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true 
    },
    username: {
        type: String,
        // required: true 
    },
    role: {
        type: String,
        enum: ['user', 'subscriber', 'moderator', 'staff', 'admin'],
        default: 'user'
    },
    email: {
        type: String,
        // required: [true, 'Please provide your email'],
        // unique: true,
        lowercase: true
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    // password: {
    //     type: String,
    //     // required: [true, "Please provide password"],
    //     minlength: 8
    // },
    // passwordConfirm: {
    //     type: String,
    //     // required: [true, 'Please confirm your password']
    // },
    photo: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    posts: Array,
    location: String,
    disabled: { type: Boolean },
    deleted: { type: Boolean, default: false },
})

userSchema.methods.authorize = function (roleToCheck) {
    const roles = ['Admin', 'Mod', 'User', 'Guest'];
    let user = this;

    for (let role of user.roles) {
        if (roles.indexOf(role) <= roles.indexOf(roleToCheck)) {
            return true;
        }
    }

    return false;
}

userSchema.methods.correctPassword = async function () { }

userSchema.methods.createPasswordResetToken = function () {

}

// userSchema.methods.signup = function () {
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
// }

module.exports = mongoose.model("User", userSchema);