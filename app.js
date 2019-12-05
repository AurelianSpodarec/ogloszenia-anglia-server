const express = require('express')

const app = express()

const port = 3001;

app.get('/', (req, res) => {
    res.status(200).send('Hello from the sever side')
})

app.listen(port, () => {
    console.log(`Server App running on port ${port}...`)
})