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
    <div className="text-bg-dark h-100 overflow-auto">
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card" id="chat1" style={{ borderRadius: 15 }}>
               
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-start mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "100%" }}
                    />
                    <div
                      className="p-3 ms-3"
                      style={{
                        borderRadius: 15,
                        backgroundColor: "rgba(57, 192, 237,.2)",
                      }}
                    >
                      <p className="small mb-0">
                        Hello and thank you for visiting MDBootstrap. Please
                        click the video below.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-end mb-4">
                    <div
                      className="p-3 me-3 border bg-body-tertiary"
                      style={{ borderRadius: 15 }}
                    >
                      <p className="small mb-0">
                        Thank you, I really like your product.
                      </p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "100%" }}
                    />
                  </div>
                  <div className="d-flex flex-row justify-content-start mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "100%" }}
                    />
                    <div className="ms-3" style={{ borderRadius: 15 }}>
                      <div className="bg-image">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                          style={{ borderRadius: 15 }}
                          alt="video"
                        />
                        <a href="#!">
                          <div className="mask" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-start mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "100%" }}
                    />
                    <div
                      className="p-3 ms-3"
                      style={{
                        borderRadius: 15,
                        backgroundColor: "rgba(57, 192, 237,.2)",
                      }}
                    >
                      <p className="small mb-0">...</p>
                    </div>
                  </div>
                  <div data-mdb-input-init className="form-outline">
                    <textarea
                      className="form-control bg-body-tertiary"
                      id="textAreaExample"
                      rows={4}
                      defaultValue={""}
                    />
                    <label className="form-label" htmlFor="textAreaExample">
                      Type your message
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
