// env
require("dotenv").config();
const apiKey = process.env.API_KEY;

// gemini (AI model)
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// test the AI
const testAI = async () => {
  const prompt = "Write me a sentence no longer than 5 words.";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
};

// export
module.exports = { testAI };
