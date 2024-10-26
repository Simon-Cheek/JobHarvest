// requirements
const gemini = require("./gemini.js");

// express setup
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

// root path
app.get("/", async (req, res) => {
  res.send("Hello, World! Welcome to my Express app!");
  gemini.testAI();
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
