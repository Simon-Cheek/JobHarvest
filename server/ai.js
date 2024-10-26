const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();
const apiKey = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const testAI = async () => {
  const prompt = "Write me a sentence no longer than 5 words.";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
};

module.exports = { testAI };
