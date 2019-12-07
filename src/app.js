const express = require('express')
const app = express()

app.use(express.json())

const { userService } = require('./services')


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

app.get('/api/v1/users/:id', (req, res) => {
    const user = userService.getUserById(res.param.id)
    return res.json(user);
})

module.exports = app