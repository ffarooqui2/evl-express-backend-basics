const express = require('express') // require express library
const app = express() // variable calls express function to setup server
const PORT = 3000
app.use(express.static(__dirname + "/public"))

app.get('/app', (req, res) => {
  console.log("You've reached table")
  res.sendFile(__dirname + "/public/pages/table.html")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})