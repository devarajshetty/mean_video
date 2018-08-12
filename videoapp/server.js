const express = require('express');
const path = require('path');		
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const port = 3000;

const app = express();

// Parsers for POST data
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist


// Set our api routes
app.use('/api', api);
//app.use('/', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/videoapp/index.html'));
});

/**
 * Get port from environment and store in Express.
 */


/**
 * Create HTTP server.
 */
//const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, function(){
console.log('API running on localhost:'+port);

});

//module.exports = router/api.js;