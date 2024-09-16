import dotenv from "dotenv";
dotenv.config();
// import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

import { OpenAI } from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    console.log(req.body)
    // const { data } = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: `Summarize this \n${text}`,
    //   max_tokens: 500,
    //   temperature: 0.5,
    // });
    const data = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
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
