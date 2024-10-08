import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      const { data } = await axios.post("/api/v1/openai/chatbot", { text });
      console.log(data);
      setResponse(data);
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
            {/* Chat Message AI */}
            <div className="flex gap-3 my-4 text-white text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-left">
                <span className="block font-bold text-white">AI </span>Hi, how
                can I help you today?
              </p>
            </div>

            {/*  User Chat Message */}
            <div className="flex gap-3 my-4 text-white text-sm flex-row-reverse">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-right">
                <span className="block font-bold text-white">You </span>fewafef
              </p>
            </div>
            {/*  User Chat Message */}
            <div className="flex gap-3 my-4 text-white text-sm flex-row-reverse">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-right">
                <span className="block font-bold text-white">You </span>fewafef
              </p>
            </div>
            {/*  User Chat Message */}
            <div className="flex gap-3 my-4 text-white text-sm flex-row-reverse">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-right">
                <span className="block font-bold text-white">You </span>fewafef
              </p>
            </div>
            {/*  User Chat Message */}
            <div className="flex gap-3 my-4 text-white text-sm flex-row-reverse">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-right">
                <span className="block font-bold text-white">You </span>fewafef
              </p>
            </div>
            {/*  User Chat Message */}
            <div className="flex gap-3 my-4 text-white text-sm flex-row-reverse">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-right">
                <span className="block font-bold text-white">You </span>fewafef
              </p>
            </div>
            {/*  User Chat Message */}
            <div className="flex gap-3 my-4 text-white text-sm flex-row-reverse">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-right">
                <span className="block font-bold text-white">You </span>fewafef
              </p>
            </div>
            {/*  User Chat Message */}
            <div className="flex gap-3 my-4 text-white text-sm flex-row-reverse">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-right">
                <span className="block font-bold text-white">You </span>fewafef
              </p>
            </div>
            {/*  User Chat Message */}
            <div className="flex gap-3 my-4 text-white text-sm flex-row-reverse">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-right">
                <span className="block font-bold text-white">You </span>fewafef
              </p>
            </div>
            {/*  User Chat Message */}
            <div className="flex gap-3 my-4 text-white text-sm flex-row-reverse">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-right">
                <span className="block font-bold text-white">You </span>fewafef
              </p>
            </div>
            {/*  User Chat Message */}
            <div className="flex gap-3 my-4 text-white text-sm flex-row-reverse">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-right">
                <span className="block font-bold text-white">You </span>fewafef
              </p>
            </div>
            {/*  User Chat Message */}
            <div className="flex gap-3 my-4 text-white text-sm flex-row-reverse">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-right">
                <span className="block font-bold text-white">You </span>fewafef
              </p>
            </div>

            {/* Ai Chat Message  */}
            <div className="flex gap-3 my-4 text-white text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-left">
                <span className="block font-bold text-white text-left">
                  AI{" "}
                </span>
                Sorry, I couldn't find any information in the documentation
                about that. Expect answer to be less accurateI could not find
                the answer to this in the verified sources.
              </p>
            </div>
          </div>
        </div>

      </div>
        {/* Input box  */}
        <div className="m-auto flex items-center pt-0 mt-3 w-4/5 overflow-hidden">
          <form className="flex items-center justify-center w-full space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              placeholder="Type your message"
              defaultValue
            />
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">
              Send
            </button>
          </form>
        </div>
    </div>
  );
};

export default ChatBot;

// <Box
//   overflow={"auto"}
//   width={isNotMobile ? "40%" : "80%"}
//   p={"2rem"}
//   m={"2rem auto"}
//   borderRadius={5}
//   sx={{ boxShadow: 5 }}
// >
//   <Collapse in={error}>
//     <Alert severity="error" sx={{ mb: 2 }}>
//       {error}
//     </Alert>
//   </Collapse>
//   <form onSubmit={handleSubmit}>
//     <Typography variant="h3">Ask with Chatbot</Typography>

//     <TextField
//       placeholder="Add your text"
//       type="text"
//       multiline={true}
//       required
//       margin="normal"
//       fullWidth
//       value={text}
//       onChange={(e) => settext(e.target.value)}
//       InputProps={{
//         style: { color: "white" }, // Set text color to white
//       }}
//       sx={{
//         input: { color: "white" },
//         "& .MuiInputBase-input::placeholder": { color: "white" }, // Placeholder color
//       }}
//     />

//     <Button
//       type="submit"
//       fullWidth
//       variant="contained"
//       size="large"
//       sx={{ color: "white", mt: 2 }}
//     >
//       Chat
//     </Button>
//     <Typography mt={2}>
//       Not this tool? <Link to="/">GO BACK</Link>
//     </Typography>
//   </form>

//   {response ? (
//     <Card
//       className="text-bg-dark"
//       sx={{
//         mt: 4,
//         border: 1,
//         boxShadow: 0,
//         height: "500px",
//         borderRadius: 5,
//         borderColor: "natural.medium",
//       }}
//     >
//       <Typography p={2}>{response}</Typography>
//     </Card>
//   ) : (
//     <Card
//       className="text-bg-dark"
//       sx={{
//         mt: 4,
//         border: 1,
//         boxShadow: 0,
//         height: "500px",
//         borderRadius: 5,
//         color: "white",
//       }}
//     >
//       <Typography
//         className="text-bg-dark"
//         variant="h5"
//         sx={{
//           textAlign: "center",
//           verticalAlign: "middle",
//           lineHeight: "450px",
//           color: "rgba(255, 255, 255, 0.6) !important",
//         }}
//       >
//         Bot Response
//       </Typography>
//     </Card>
//   )}
// </Box>;
