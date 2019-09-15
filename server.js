/**
 * File: server.js
 * Purpose: simple express server for planet-moons proto
 */

 // require the express lib
const express = require('express');

// require path, which should come with node
const path = require('path');

// set PORT env var
const PORT = process.env.port || 3000;

// create an express app
const app = express();

app.use(express.static('./client/src'));

// do default GET route for root and serve up index.html file
app.get('/', (req, res) => {
  // simple method ti send a file bck to the client
  res.sendFile(path.join(__dirname, '../client/src/index.html')); // join a var for working dir + 'filepath'
});

// listen on a port
app.listen(3000);

console.log(`Server running and listening on http://localhost:${PORT}`);


