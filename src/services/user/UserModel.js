const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    role: [{ type: String }],
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true
    },
    emailVerified: Boolean,
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password']
    },
    photo: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    posts: {
        type: Array,
    },
    location: {
        type: String,
    },
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

module.exports = mongoose.model("User", userSchema);