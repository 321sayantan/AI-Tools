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

  const options = {
    method: 'POST',
    url: 'https://text-to-image13.p.rapidapi.com/',
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'text-to-image13.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      prompt: text || 'cyberpunk cat' 
    },
    responseType: 'arraybuffer' 
  };

  try {
    const response = await axios.request(options);

    if (response.status === 200) {
      const uniqueFilename = `${uuidv4()}.webp`;
      const imagePath = path.join(process.cwd(), 'public', uniqueFilename);

    
      fs.writeFileSync(imagePath, Buffer.from(response.data));

      const imageUrl = `${req.protocol}://${req.get('host')}/${uniqueFilename}`;
      

      res.json({
        message: "Image generated and saved successfully!",
        imageUrl
      });

    } else {

      throw new Error(`${response.status}: ${response.data.toString()}`);
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Failed to generate image',
      details: error.message
    });
  }
};


export const paragraphController = async (req, res) => {
  try {
    const { text } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Write a paragraph on the following text: ${text}`;

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


export const jsconverterController = async(req, res) => {
  try {
    const { text } = req.body;
    
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Write javascipt code for: ${text}`;
    
    const result = await model.generateContent(prompt);
    const response = result.response;
    console.log(response.text());
    

    return res.status(200).json(response.text());
    
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
};



export const chatbotController = async(req, res) => {
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const { text } = req.body;

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello" }],
    },
    {
      role: "model",
      parts: [{ text: "Great to meet you. What would you like to know?" }],
    },
  ],
});

let result = await chat.sendMessage(text);
return res.status(200).json(result.response.text());
console.log(result.response.text());



};
