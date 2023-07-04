const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {

    const {title} = req.query;
    const fetch = require('node-fetch');

    const baseUrl = 'https://api.themoviedb.org/3/search/movie';
    const apiKey = 'ed38a68ab3da274d8e598511016db30f'; // Replace with your actual API key

    const url = `${baseUrl}?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(title)}&include_adult=false&page=1`;

    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDM4YTY4YWIzZGEyNzRkOGU1OTg1MTEwMTZkYjMwZiIsInN1YiI6IjY0OTRkOTE2ODgwNTUxMDEwNjM0M2Q5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IlKEVBMUwXpzwCNqmYG0VriHcqmQI6XjLR1Rs3S4Kmc'
    }};

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));

})

module.exports = router