const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true
    },
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
})

module.exports = mongoose.model("User", userSchema);