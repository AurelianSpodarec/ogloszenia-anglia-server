const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.json())

const { userService } = require('./services')

const users = JSON.parse(
    fs.readFileSync(`${__dirname}/data/users.json`)
)

app.get('/api/v1/users', (req, res) => {
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         users: userService.listUsers()
    //     }
    // })
    const users = userService.listUsers()
    res.json(users)
})

module.exports = app