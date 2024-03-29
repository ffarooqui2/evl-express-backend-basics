const express = require('express') // require express library
const app = express() // variable calls express function to setup server
const PORT = 3000
app.use(express.static(__dirname + "/public")) // takes the name of our folder that is static (convention is public)

app.get('/movies', (req, res) => {
  console.log("You've reached the movies page")
  res.sendFile(__dirname + "/public/pages/movies.html")
})

app.get('/advanced', (req, res) => {
  console.log("You've reached the movies page")
  res.sendFile(__dirname + "/public/pages/movieResults.html")
})

const userRouter = require('./routes/apps')
app.use('/apps', userRouter)

const movieSearchRouter = require('./routes/movie')
app.use('/search', movieSearchRouter)

const advancedSearchRouter = require('./routes/advanced')
app.use('/advanced', advancedSearchRouter)

// Catch all route for unknown URLs
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})