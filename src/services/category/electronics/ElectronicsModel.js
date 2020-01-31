const mongoose = require('mongoose');

const ElectronicsSchema = new mongoose.Schema({
    title: String,
    coverPicture: String,
    price: Number,

})

module.exports = mongoose.model("ElectronicsSchema", ElectronicsSchema)