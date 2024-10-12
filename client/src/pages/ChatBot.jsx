import React, { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import axios from "axios";

const ChatBot = () => {
  const [text, settext] = useState("");
  const [chatHistory, setChatHistory] = useState(
    JSON.parse(sessionStorage.getItem("chatHistory")) || []
  );
  const chatContainerRef = useRef(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user input to history
    const newChatHistory = [
      ...chatHistory,
      { role: "user", parts: [{ text: text }] }];
    sessionStorage.setItem("chatHistory", JSON.stringify(newChatHistory));
    setChatHistory(newChatHistory); 
    console.log(newChatHistory);

    try {
      const jwt = localStorage.getItem("authToken");
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/genAi/chatbot",
         { text, chatHistory },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${jwt}`,
          },
        },
      );
      
      const res = marked.parse(data);

      // Add bot response to history
      const updatedChatHistory = [
        ...newChatHistory,
        // { role: "bot", text: res },
        { role: "model", parts: [{text: res}] },
      ];
      sessionStorage.setItem("chatHistory", JSON.stringify(updatedChatHistory));
      setChatHistory(updatedChatHistory); // Update the state

      // Clear input field
      settext("");
    } catch (err) {
      console.log(err);
    }
  };

  // Scroll to bottom whenever chatHistory changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="overflow-hidden">
      <h1 className="mb-4 mt-2">AI ChatBot</h1>
      <div
        style={{
          boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        }}
        className="m-auto max-h-[77%] overflow-hidden bg-dark p-0 rounded-lg border border-[#e5e7eb] w-4/5 h-auto"
      >
        <div
          className="overflow-auto h-[550px] pt-4 pb-4 ml-5" // Set a fixed height
          ref={chatContainerRef}
          style={{ padding: 0, margin: 0 }} // Attach ref to container
        >
          {/* initial message */}
          <div className="flex ml-2 text-left flex-row mb-4">
            <img
              src="/images/logo.png"
              className="h-8 me-0.1 mr-2 rounded-full bg-white p-0.5"
              alt="Tool-E Logo"
            />
            <div
              className={`p-3 me-3`}
              style={{
                borderRadius: 15,
                backgroundColor: "rgba(0, 0, 0, .2)",
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(
                    "Hi there! I'm your friendly chatbot, here to assist you. How can I help?"
                  ),
                }}
              />
            </div>
          </div>

          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`chat ${
                message.role === "user" ? "chat-end" : "chat-start"
              }`}
            >
              {message.role === "user" ? (
                <div className="flex mr-2 flex-row-reverse mb-4">
                  <img
                    src="/images/user.png"
                    className="h-8 ms-0.1 ml-2 rounded-full bg-white p-0.5"
                    alt="User Logo"
                  />
                  <div
                    className={`p-3 ms-3`}
                    style={{
                      borderRadius: 15,
                      backgroundColor: "rgba(57, 192, 237,.2)",
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(message.parts[0].text),
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex ml-2 text-left flex-row mb-4">
                  <img
                    src="/images/logo.png"
                    className="h-8 me-0.1 mr-2 rounded-full bg-white p-0.5"
                    alt="Tool-E Logo"
                  />
                  <div
                    className={`p-3 me-3 max-w-4xl`}
                    style={{
                      borderRadius: 15,
                      backgroundColor: "rgba(0, 0, 0, .2)",
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(message.parts[0].text),
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Input box */}
      <div className="m-auto flex items-center pt-0 mt-3 w-4/5 overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center w-full space-x-2"
        >
          <input
            className="font-sans font-normal bg-slate-300 flex h-10 w-full rounded-lg border border-[#e5e7eb] px-3 py-2 text-md placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#020202] focus-visible:ring-offset-2"
            placeholder="Type your message"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#ffffff] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-white h-10 px-4 py-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
