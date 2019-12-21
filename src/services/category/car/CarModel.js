const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    carId: String,
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    // name: String, What is this, can't remember : p

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

// CarSchema.pre('save', async function (next) {
//     const users = this.userId;
//     next()
// })

module.exports = mongoose.model("Car", CarSchema);