// Import the express module
const express = require("express");

// Create an instance of an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route for the root path
app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to my Express app!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
