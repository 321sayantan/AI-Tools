import React, { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "../components/Button";

const ChatBot = () => {
  const [text, settext] = useState("");

  // Initialize chatHistory as an empty array
  const [chatHistory, setChatHistory] = useState([]);

  const chatContainerRef = useRef(null);

  // Fetch chat history from the backend
  const fetchChatHistory = async () => {
    const jwt = localStorage.getItem("authToken");
    try {
      const { data } = await axios.get(
        // "http://localhost:5000/api/v1/genAi/updateHistory",
        "https://tool-e.onrender.com/api/v1/genAi/updateHistory",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${jwt}`,
          },
        }
      );
      // sessionStorage.setItem("chatHistory", JSON.stringify(data));
      setChatHistory(data.length > 0 ? data : [
        // { role: "model", parts: [{ text: "Hi there! I'm your friendly chatbot, here to assist you. How can I help?" }] }
      ]);
    } catch (error) {
      console.error("Error fetching chat history:", error);
      setChatHistory([{ role: "model", parts: [{ text: "Hi there! I'm your friendly chatbot, here to assist you. How can I help?" }] }]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is logged in
    const jwt = localStorage.getItem("authToken");
    if (!jwt) {
      toast.error("You need to log in to use the chatbot.");
      return;
    }

    // Create a new user message
    const userMessage = { role: "user", parts: [{ text: text }] };

    // If chat history is empty, add the default message before the user's message
    const newChatHistory = chatHistory.length > 0
      ? [...chatHistory, userMessage]
      : [
        { role: "model", parts: [{ text: "Hi there! I'm your friendly chatbot, here to assist you. How can I help?" }] },
        userMessage,
      ];

    // sessionStorage.setItem("chatHistory", JSON.stringify(newChatHistory));
    setChatHistory(newChatHistory);
    console.log(newChatHistory);

    try {
      const { data } = await axios.post(
        // "http://localhost:5000/api/v1/genAi/chatbot",
        "https://tool-e.onrender.com/api/v1/genAi/chatbot",
        { text },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${jwt}`,
          },
        }
      );

      const res = marked.parse(data);

      // Add bot response to history
      const updatedChatHistory = [
        ...newChatHistory,
        { role: "model", parts: [{ text: res }] },
      ];
      // sessionStorage.setItem("chatHistory", JSON.stringify(updatedChatHistory));
      setChatHistory(updatedChatHistory); // Update the state

      // Clear input field
      settext("");
    } catch (err) {
      console.error("Error:", err);
    }
  };



  // Function to delete chat history
  const clearChatHistory = async () => {
    console.log("Clearing chat history...");

    const jwt = localStorage.getItem("authToken");
    if (!jwt) {
      toast.error("You need to log in to clear chat history.");
      return;
    }

    try {
      console.log("test test test");
      // await axios.delete("http://localhost:5000/api/v1/genAi/clearchat", {
      await axios.delete("https://tool-e.onrender.com/api/v1/genAi/clearchat", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${jwt}`,
        },
      });

      // Clear the chat history in state and session storage
      setChatHistory([]); // Reset local chat history state
      // sessionStorage.removeItem("chatHistory"); // Clear session storage
      toast.success("Chat history cleared!");
    } catch (error) {
      console.error("Error clearing chat history:", error);
      toast.error("Failed to clear chat history.");
    }
  };

  // Scroll to bottom whenever chatHistory changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Fetch chat history on component mount
  useEffect(() => {
    if(chatHistory.length == 0)
      fetchChatHistory(); // Fetch chat history from the backend
  }, []);

  return (
    <div className="overflow-auto ">
      <div className="w-4/5 mx-auto ">
        <div className="w-4/5 mx-auto">
          <div className="flex items-center justify-between mt-2">
            <div className="loader">
              <div className="modelViewPort">
                <div className="eva">
                  <div className="head">
                    <div className="eyeChamber">
                      <div className="eye" />
                      <div className="eye" />
                    </div>
                  </div>
                  <div className="body">
                    <div className="hand" />
                    <div className="hand" />
                    <div className="scannerThing" />
                    <div className="scannerOrigin" />
                  </div>
                </div>
              </div>
            </div>


            <h1 className="text-center ml-3">𝙰𝙸 𝙲𝚑𝚊𝚝𝙱𝚘𝚝 </h1>

            <div
              className="ml-auto cursor-pointer" // Add cursor pointer to indicate it's clickable
              onClick={clearChatHistory} // Attach the click handler
            >
              {/* Replace this with your animated div */}
              <div className="animated-clear-chat">
                <Button />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
          }}
          className="m-auto max-h-[77%] overflow-hidden bg-dark p-0 rounded-lg border border-[#e5e7eb] w-4/5 h-auto"
        >
          <div
            className="overflow-auto h-[510px] pt-4 pb-4 ml-5"
            ref={chatContainerRef}
            style={{ padding: 0, margin: 0 }}
          >

            

            {chatHistory.length > 0 ? (
              chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={`chat ${message.role === "user" ? "chat-end" : "chat-start"}`}
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
                        className={`p-3 me-3 max-w-3xl`}
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
              ))
            ) : (
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
                      __html: marked("Hi there! I'm your friendly chatbot, here to assist you. How can I help?"), // Default message
                    }}
                  />
                </div>
              </div>
            )}
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
    </div>
  );
};

export default ChatBot;


/**<div className="flex ml-2 text-left flex-row mb-4">
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
        ), // Default message
      }}
    />
  </div>
</div> **/