// install express first with 'npm install express'
const express = require('express'); // Import the Express.js framework
const app = express(); // Create an instance of the Express application
const port = 3000; // Define the port where the server will listen

// Routes (define what happens for different URLs)

// Route for the homepage ('/')
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>'); // Send the HTML response for the homepage
});

// Route for the 'About Us' page
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
});

// Route for the 'Contact Us' page
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1>');
});

// Route for the 'Our Products' page
app.get('/products', (req, res) => {
    res.send('<h1>Our Products</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); // Log a message indicating the server is running
});

