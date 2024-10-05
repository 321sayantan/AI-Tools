import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChatBot from './ChatBot';
import Paragraph from './Paragraph';
import Header from "../components/Header";
import ToolsList from "../components/ToolsList";
import Features from "../components/features";
import Workflows from "../components/Workflows";
import Spotlight from "../components/spotlight";

const Homepage = () => {
  return (
    <>
    <Header />  
    <Spotlight>
    <div className=" relative h-full overflow-auto  bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100">
      <div className="relative z-20 h-full overflow-auto rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 ">
        <Features />
        <ToolsList />
      </div>
      </div>
      </Spotlight>
    </>
  );
};

export default Homepage;


