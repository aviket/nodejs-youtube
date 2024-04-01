// install express first with 'npm install express'
const express = require('express'); // Import the Express.js framework
const app = express(); // Create an instance of the Express application
const port = 3000; // Define the port where the server will listen
const home = require('./components/Home');
const about = require('./components/About');
const contact = require('./components/Contact');
const products = require('./components/Product');


// Routes (define what happens for different URLs)

// Route for the homepage ('/')
app.get('/', home);

// Route for the 'About Us' page
app.get('/about', about );

// Route for the 'Contact Us' page
app.get('/contact', contact);

// Route for the 'Our Products' page
app.get('/products', products);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); // Log a message indicating the server is running
});

