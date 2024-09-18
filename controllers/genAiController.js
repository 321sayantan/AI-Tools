import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";
import path from 'path'; 
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Write a brief summary of the following text: ${text}`;

    const result = await model.generateContent(prompt);
    const response = result.response;

    return res.status(200).json(response.text());

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
};



export const scifiImageController = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  const payload = {
    prompt: text,
    output_format: "webp"
  };

  try {
    const formData = new FormData();
    for (const [key, value] of Object.entries(payload)) {
      formData.append(key, value);
    }

    const response = await axios.post(
      `https://api.stability.ai/v2beta/stable-image/generate/ultra`,
      formData,
      {
        validateStatus: undefined,
        responseType: "arraybuffer",
        headers: { 
          ...formData.getHeaders(),
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`, 
          Accept: "image/*" 
        },
      }
    );

    if (response.status === 200) {
      const uniqueFilename = `${uuidv4()}.webp`;
      const imagePath = path.join(process.cwd(), 'public', uniqueFilename);
      fs.writeFileSync(imagePath, Buffer.from(response.data));

      const imageUrl = `${req.protocol}://${req.get('host')}/${uniqueFilename}`;
      res.json({ message: "Image generated and saved successfully!", imageUrl });
      
    } else {
      throw new Error(`${response.status}: ${response.data.toString()}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
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
