import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ToolsList from "../components/ToolsList";
import Features from "../components/features";
import Workflows from "../components/Workflows";
import Spotlight from "../components/spotlight";
import Testimonials from "../components/Testimonials";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <>
      <Header />
        <Features />
        <ToolsList />
        <Testimonials />
        <Footer />
    </>
  );
};

export default Homepage;


