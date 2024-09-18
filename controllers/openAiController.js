import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
// import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// import { OpenAI } from "openai";
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
//   // baseURL: "http://localhost:3040/v1",
// });

const gemini_api_key = process.env.API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};

const geminiModel = googleAI.getGenerativeModel({
  model: "gemini-pro",
  geminiConfig,
});

// const generate = async () => {
//   try {
//     const prompt = "Tell me about google.";
//     const result = await geminiModel.generateContent(prompt);
//     const response = result.response;
//     console.log(response.text());
//   } catch (error) {
//     console.log("response error", error);
//   }
// };

// generate();

export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    console.log(req.body);

    // const prompt = "Give me the summary of" + text;
    const prompt = "Write a paragraph on " + text;
    const result = await geminiModel.generateContent(prompt);
    const response = result.response;
    console.log(response.text());

    return res.status(200).json(response.text());

  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

export const paragraphController = (req, res) => {
  res.json({ message: "Paragraph Controller Dummy Response" });
};

export const chatbotController = (req, res) => {
  res.json({ message: "Chatbot Controller Dummy Response" });
};

export const jsconverterController = (req, res) => {
  res.json({ message: "JS Converter Controller Dummy Response" });
};

export const scifiImageController = (req, res) => {
  res.json({ message: "Sci-fi Image Controller Dummy Response" });
};
