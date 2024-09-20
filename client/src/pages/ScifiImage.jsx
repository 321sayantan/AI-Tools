import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/v1/genAi/scifi-image", { text });
      

      const uniqueImageUrl = `${data.imageUrl}?${new Date().getTime()}`;
      
      console.log(uniqueImageUrl);
      setImage(uniqueImageUrl);
    } catch (err) {
      console.log(err);
      if (err.response?.data?.error) {
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
    <Box
     overflow={"auto"}
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <Collapse in={!!error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">Scifi Image</Typography>

        <TextField
          placeholder="add your text"
          type="text"
          multiline={true}
          required
          margin="normal"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
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
          not this tool? <Link to="/">GO BACK</Link>
        </Typography>
      </form>

      <Card
        sx={{
          mt: 4,
          border: 1,
          boxShadow: 0,
          borderRadius: 5,
          borderColor: "natural.medium",
          bgcolor: "background.default",
          overflow: "hidden", 
        }}
      >
        {image ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <img
              src={image}
              alt="scifiimage"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        ) : (
          <Typography
            variant="h5"
            color="natural.main"
            sx={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "450px",
            }}
          >
            Your Scifi Image Will Appear Here
          </Typography>
        )}
      </Card>
    </Box>
  );
};

export default ScifiImage;
