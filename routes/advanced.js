const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {

    const {title, year} = req.query;

    const fetch = require('node-fetch');
    const url = 'https://api.themoviedb.org/3/search/movie?query=Spider&include_adult=false&language=en-US&page=1&year=2020';

    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDM4YTY4YWIzZGEyNzRkOGU1OTg1MTEwMTZkYjMwZiIsInN1YiI6IjY0OTRkOTE2ODgwNTUxMDEwNjM0M2Q5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IlKEVBMUwXpzwCNqmYG0VriHcqmQI6XjLR1Rs3S4Kmc'
    }};

    fetch(url, options)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        const results = json.results;
        const movieContainer = document.getElementById('movieContainer')
    let counter = 1;

    results.forEach(movie => {
        // we create the movie elements
        const movieDiv = document.createElement('div')
        const titleElement = document.createElement('h2')
        const overviewElement = document.createElement('p')
        const releaseDateElement = document.createElement('p')

        // assign the data to those elements

        titleElement.textContent = counter + '. '+ movie.title;
        overviewElement.textContent = movie.overview;
        releaseDateElement.textContent = 'Release Date: ' + movie.release_date

        // append the elements to the movie container
        movieDiv.appendChild(titleElement)
        movieDiv.appendChild(overviewElement)
        movieDiv.appendChild(releaseDateElement)
        movieContainer.appendChild(movieDiv)

        counter += 1

        })
    })
    .catch(err => console.error('error:' + err));

})

module.exports = router