const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    name: String,
})

module.exports = mongoose.model("CarSchema", CarSchema);