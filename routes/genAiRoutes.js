import express from "express";
import {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
  updateHistory,
  clearHistory,
  getimage,
} from "../controllers/genAiController.js"; 
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();


router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot",verifyToken, chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);
router.get("/updateHistory", verifyToken, updateHistory);
router.get("/getImages", getimage);
router.delete("/clearchat", verifyToken, clearHistory);

export default router;