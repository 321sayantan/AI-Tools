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

const ScifiImage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  const [text, settext] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/genAi/scifi-image",
        { text }
      );
      console.log(data);
      // Set image to the imageUrl returned from the server
      setImage(data.imageUrl); 
    } catch (err) {
      console.log(err);
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
      <Box
        width={isNotMobile ? "40%" : "80%"}
        p={"2rem"}
        m={"2rem auto"}
        borderRadius={5}
        sx={{ boxShadow: 5 }}
      >
        <Collapse in={error}>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        </Collapse>
        <form onSubmit={handleSubmit}>
          <Typography variant="h3">AI Image Generator</Typography>

          <TextField
            placeholder="Add your text"
            type="text"
            multiline={true}
            required
            margin="normal"
            fullWidth
            value={text}
            onChange={(e) => settext(e.target.value)}
            InputProps={{
              style: { color: "white" }, // White text color
            }}
            sx={{
              input: { color: "white" },
              "& .MuiInputBase-input::placeholder": { color: "white" },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ color: "white", mt: 2 }}
          >
            Submit
          </Button>
          <Typography mt={2}>
            Not this tool? <Link to="/">GO BACK</Link>
          </Typography>
        </form>

        {image ? (
          <Card
            className="text-bg-dark"
            sx={{
              mt: 4,
              border: 1,
              boxShadow: 0,
              height: "500px",
              borderRadius: 5,
              borderColor: "natural.medium",
              overflow: "auto",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
              <img src={image} alt="scifiimage" style={{ maxWidth: "100%" }} />
            </Box>
          </Card>
        ) : (
          <Card
            className="text-bg-dark"
            sx={{
              mt: 4,
              border: 1,
              boxShadow: 0,
              height: "500px",
              borderRadius: 5,
              color: "white",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "450px",
                color: "rgba(255, 255, 255, 0.6) !important",
              }}
            >
              Your image Will Appear Here!
            </Typography>
          </Card>
        )}
      </Box>
    </div>
  );
};

export default ScifiImage;
