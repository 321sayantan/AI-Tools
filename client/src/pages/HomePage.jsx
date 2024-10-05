import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChatBot from './ChatBot';
import Paragraph from './Paragraph';
import Header from "../components/Header";
import ToolsList from "../components/ToolsList";
import Features from "../components/features.jsx";
import Footer from "../components/footer.jsx";
import Testimonials from "../components/Testimonials.jsx";


const Homepage = () => {
  return (
    <>
      <div className="d-flex flex-column h-100 text-center text-bg-dark">
        <Header />   
        <Features />
        <ToolsList />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;


