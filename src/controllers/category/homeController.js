const express = require('express')
const router = express.Router();
const { homeService } = require('./../../services/category')

router.get('/api/v1/homes', async (req, res) => {
    const homes = homeSerice.listHomes()
    res.json(homes)
})

module.exports = router;