const express = require('express')
const app = express()
const router = express.Router


router.get('/random', (req, res) => {
    res.send('random user found')
})

module.exports = router;