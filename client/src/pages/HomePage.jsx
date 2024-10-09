import React from "react";
import Header from "../components/Header";
import ToolsList from "../components/ToolsList";
import Features from "../components/features";
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


