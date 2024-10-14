import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";
import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";
import path from "path";
import { v4 as uuidv4 } from "uuid";

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
    method: "POST",
    url: "https://text-to-image13.p.rapidapi.com/",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": "text-to-image13.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      prompt: text || "cyberpunk cat",
    },
    responseType: "arraybuffer",
  };

  try {
    const response = await axios.request(options);

    if (response.status === 200) {
      const uniqueFilename = `${uuidv4()}.webp`;
      const imagePath = path.join(process.cwd(), "public", uniqueFilename);

      fs.writeFileSync(imagePath, Buffer.from(response.data));

      const imageUrl = `${req.protocol}://${req.get("host")}/${uniqueFilename}`;

      res.json({
        message: "Image generated and saved successfully!",
        imageUrl,
      });
    } else {
      throw new Error(`${response.status}: ${response.data.toString()}`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to generate image",
      details: error.message,
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

export const jsconverterController = async (req, res) => {
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

export const chatbotController = async (req, res) => {
  try {
    // console.log(req.token);
    jwt.verify(req.token, process.env.JWT_ACCESS_SECRET, async (err, data) => {
      // console.log(1,data)
      if (data === undefined) {
        console.log("token expired");
        res.status(200).json({ message: "Login Session Expired" });
      } else {
        if (err) {
          res.status(403);
        }
        // console.log(dataa);
        const user = await User.findOne({ _id: data.id });
        if (!user) {
          console.log("user not found");
          res.status(400).json("Invalid User");
        } else {
          // console.log(user);
          const genAI = new GoogleGenerativeAI(process.env.API_KEY);
          const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
          const { text } = req.body;

          // const history =
          //   chatHistory.length == 0 ? user.ChatBotHistory : chatHistory;

          const history = user.ChatBotHistory;
          // console.log(3, history);
          // console.log(4, history[0].parts[0].text);
          // console.log(5, history[0].parts[0]);

          const chat = model.startChat({
            history: history.map((message) => ({
              role: message.role, // should be either 'user' or 'model'
              parts: [{ text: message.parts[0].text }],
            })),
          });

          let result = await chat.sendMessage(text);

          const conversation = [
            { role: "user", parts: [{ text: text }] },
            { role: "model", parts: [{ text: result.response.text() }] },
          ];

          const his = await User.findByIdAndUpdate(user._id, {
            $push: { ChatBotHistory: { $each: conversation } },
          });
          // console.log(his)

          return res.status(200).json(result.response.text());
          console.log(result.response.text());
        }
      }
    });
  } catch (err) {
    console.log(err)
  }
};

export const updateHistory = async (req, res) => {
  try {
    jwt.verify(req.token, process.env.JWT_ACCESS_SECRET, async (err, data) => {
      if (data === undefined) {
        console.log("token expired");
        res.status(200).json({ message: "Login Session Expired" });
      } else {
        const user = await User.findOne({ _id: data.id });
        if (!user) {
          console.log("user not found");
          res.status(400).json("Invalid User");
        } else {
          return res.status(200).json(user.ChatBotHistory);
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearHistory = async (req, res) => {
  console.log("test");

  try {
    jwt.verify(req.token, process.env.JWT_ACCESS_SECRET, async (err, data) => {
      if (err || !data) {
        console.log("Token expired or invalid");
        return res.status(200).json({ message: "Login Session Expired" });
      }

      const user = await User.findOne({ _id: data.id });
      if (!user) {
        console.log("User not found");
        return res.status(400).json("Invalid User");
      }

      await User.findByIdAndUpdate(user._id, {
        $set: { ChatBotHistory: [] },
      });

      return res.status(200).json("Chat History Cleared, default messages retained");
    });
  } catch (error) {
    console.log("Error while clearing chat history:", error);
    return res.status(500).json("Internal Server Error");
  }
};
