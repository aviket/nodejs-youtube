// Import the built-in 'http' module, which allows creating HTTP servers
const http = require('http');

// Define the hostname (in this case, '127.0.0.1', which refers to the local machine)
const hostname = '127.0.0.1'; // Localhost

// Define the port number to listen on (in this case, 3000)
const port = 3000;

// Create an HTTP server instance using the 'createServer' method of the 'http' module
// This method takes a callback function that will be invoked each time a request is made to the server
const server = http.createServer((req, res) => { 

    // Set the status code of the response to 200, indicating success
    res.statusCode = 200;

    // Set the 'Content-Type' header of the response to 'text/plain'
    res.setHeader('Content-Type', 'text/html');

    // Write the response body, in this case, 'Hello, World!\n'
    res.end('<p style="color:blue; font-weight:bold;">Hello, World!</p>\n');
});

// Tell the server to start listening for incoming connections on the specified hostname and port
// Also, provide a callback function that will be invoked once the server has started listening
server.listen(port, hostname, () => {

    // Print a message to the console indicating that the server is running,
    // including the hostname and port it is listening on
    console.log(`Server running at http://${hostname}:${port}/`);
});

