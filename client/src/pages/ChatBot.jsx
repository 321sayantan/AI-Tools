import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { marked } from "marked";
import toast from "react-hot-toast";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
} from "@mui/material";



const ChatBot = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  const [text, settext] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/v1/genAi/chatbot", { text });
      const res = marked.parse(data);
      setResponse(res);
    
      

    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="overflow-hidden">
      <h1 className="mb-4 mt-2">AI ChatBot</h1>
      <div
        style={{
          boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        }}
        className="m-auto overflow-auto max-h-[77%] bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-dark p-6 rounded-lg border border-[#e5e7eb] w-4/5 h-auto"
      >
        {/* Chat Container */}
        <div className="overflow-auto">
          <div
            className="pr-4 h-[474px]"
            style={{ minWidth: "100%", display: "table" }}
          >
            {/* BOT RESPONSE */}
            <div className="chat text-wrap text-left chat-start">

              <div className="d-flex flex-row justify-content-start mb-4">
                <img
                  src="/images/logo.png"
                  className="h-8 me-0.1 rounded-full bg-white p-0.5"
                  alt="Tool-E Logo"
                />
                <div className="p-3 ms-3" style={{ borderRadius: 15, backgroundColor: 'rgba(57, 192, 237,.2)' }}>

                {response ? <div dangerouslySetInnerHTML={{ __html: marked(response) }} /> : "Hello! How can I help you today?"}

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Input box  */}
      <div className="m-auto flex items-center pt-0 mt-3 w-4/5 overflow-hidden">
        <form onSubmit={handleSubmit} className="flex items-center justify-center w-full space-x-2">
          <input
            className=" font-sans font-normal bg-slate-300 flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-md placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#020202] focus-visible:ring-offset-2"
            placeholder="Type your message"
           
            onChange={(e) => {
              settext(e.target.value);
            }}
          />
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#ffffff] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;

