const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    name: String,
    userId: Number,
    createdAt: Number,

    title: String,
    description: String,
    price: Number,
    location: String,
    postedBy: String,

    brand: String,
    model: String,
    year: Number,
    milleage: Number,

    bodyStyle: String,
    transmision: String,
    fuel: String,
    driveStrain: String,
    seats: Number,

    coverPicture: String,
    media: [{ id: Number, image: String }],
})

module.exports = mongoose.model("CarSchema", CarSchema);