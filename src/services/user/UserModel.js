const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
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

module.exports = mongoose.model("User", userSchema);