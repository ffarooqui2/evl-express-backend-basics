// need to requre the http library
const http = require('http')
const fs = require('fs') // all the file handling
const port = 5500

// create server takes a single function with a request and response parameters, to hanlde all the activity on our server
// When the user requests, we can send them the HTML text
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}) // First paramter is the status code of the operation. Second paramter are the different headers you want to set, key value pair, tells the browser that the info is htlm doc so parse it as is


    fs.readFile('index.html', function(error, data){
        // first param: file to be read, second param: funciton what to do


        if (error) {
            // couldn't find what user is looking for
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            // write the data from the file, basically all the data in the html
            res.write(data)
        }
        res.end()
    })
    
})

// set up server to listen to on the port we want it to
// takes a single function that itll call if an error occurs. either it'll pass an error or nothing 
server.listen(port, function(error){
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})