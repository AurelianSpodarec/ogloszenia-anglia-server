const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.json())


const users = JSON.parse(
    fs.readFileSync(`${__dirname}/data/users.json`)
)



// const getAllCars = () => (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         // result: cars.length,
//         // data: {
//         //     cars
//         // }
//     })
// }


// app.get('/api/v1/cars', getAllCars)

module.exports = app