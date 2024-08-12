// Create web server
var express = require('express');
var app = express();

// Create a route
app.get('/', function(req, res) {
    res.send('Hello World!');
});

// Create a route
app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});

// Start the server
app.listen(3000, function() {
    console.log('App is listening on port 3000');
});

// Run the server with node comments.js
// Visit http://localhost:3000/ in your browser
// Visit http://localhost:3000/comments in your browser