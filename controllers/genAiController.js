import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text is required." });
    }
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Write a brief summary of the following text: ${text}`;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    if (result && result.response && typeof result.response.text === 'function') {
      return res.status(200).json(result.response.text());
    } else {
      return res.status(404).json({ error: "Summary could not be generated." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Internal Server Error",
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
