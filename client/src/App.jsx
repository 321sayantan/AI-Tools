import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage";
import Register from './pages/Registerpage'
import Login from "./pages/LogIn";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import ScifiImage from "./pages/ScifiImage";
import ChatBot from "./pages/ChatBot";
import JsConverter from "./pages/JsConverter"
import ImageGallary from "./pages/ImageGallary";



function App() {
  return (
    <>
      <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/imageGallary" element={<ImageGallary />} />
        </Routes>
    </>
  );
}

export default App;
