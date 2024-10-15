import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  imageURL: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Image = mongoose.model("Image", imageSchema);

export default Image;