const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.query);
    return res.json({
        message: 'Hello World',
        name: req.query.name,
        age: req.query.age
    })
})

module.exports = router 