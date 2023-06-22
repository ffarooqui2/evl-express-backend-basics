const express = require('express')
const router = express.Router()

router.get('/app1', (req, res) => {
    res.send({name: 'app1', value: 44})
})
  
router.get('/app2', (req, res) => {
    res.send({name: 'app2', value: 42})
})

module.exports = router