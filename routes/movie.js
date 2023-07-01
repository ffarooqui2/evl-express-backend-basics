const express = require('express')
const router = express.Router()

// supposed to get the name of a movie
router.get("?:name", (req, res) =>{
    console.log(req.params.name)
})

module.exports = router