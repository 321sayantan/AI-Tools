import express from "express";
import {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} from "../controllers/genAiController.js"; 

const router = express.Router();

// routes
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);

export default router;
