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
} from "@mui/material";

const LogIn = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/v1/auth/LogIn", { email, password });
      console.log(1, data.token.accessToken);
      if (data.token.accessToken) {
        localStorage.setItem("authToken", true);
        toast.success("LogIn Successful");
        navigate("/");
      }
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
    <div className="text-bg-dark h-100"> 
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
          <Typography variant="h3" color="white">Sign in</Typography>
          <TextField
            label="Email"
            type="email"
            required
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            InputLabelProps={{
              style: { color: 'white' }, // Change label color to white
            }}
            sx={{
              '& .MuiInputBase-root': {
                color: 'white', // Change input text color to white
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', // Change input border color to white
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'lightgray', // Change border color on hover
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', // Change border color when focused
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            required
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            InputLabelProps={{
              style: { color: 'white' }, // Change label color to white
            }}
            sx={{
              '& .MuiInputBase-root': {
                color: 'white', 
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', 
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'lightgray', 
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', 
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ color: "white", mt: 2 }}
          >
            Sign In
          </Button>
          <Typography mt={2} color="white">
            Don't have an account? <Link to="/register">Register</Link>
          </Typography>
        </form>
      </Box>
    </div>
  );
};

export default LogIn;