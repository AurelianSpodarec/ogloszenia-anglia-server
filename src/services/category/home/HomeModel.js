const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    title: String,
    coverPicture: String,
    price: Number,

})

module.exports = mongoose.model("HomeSchema", HomeSchema)