const express = require('express') // require express library
const app = express() // variable calls express function to setup server
const PORT = 3000
app.use(express.static(__dirname + "/public")) // takes the name of our folder that is static (convention is public)

app.get('/table', (req, res) => {
  console.log("You've reached table")
  res.sendFile(__dirname + "/public/pages/table.html")
})

// Catch all route for unknown URLs
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

const userRouter = require('./routes/apps')
app.use('/apps', userRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})