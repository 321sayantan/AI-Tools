import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChatBot from './ChatBot';
import Paragraph from './Paragraph';
import Header from "../components/Header";
import ToolsList from "../components/ToolsList";

const Homepage = () => {
  return (
    <>
      <div className="d-flex flex-column h-100 text-center text-bg-dark">
        <Header />   
        <ToolsList />
      </div>
    </>
  );
};

export default Homepage;


