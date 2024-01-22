
require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;


// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a route for the '/twitter' URL
app.get('/twitter', (req, res) => {
  res.send('twittwe');
});

app.get('/login', (req, res) => {
    res.send('loginnkkkjkjmioij');
});
  
app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur code</h2>")
})

// Start the server and listen on port 3000

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
  });