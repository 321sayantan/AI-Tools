import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import cookie from "cookie";

const chatHistorySchema = new mongoose.Schema({
  role: { type: String, required: true }, // Ensure this matches your data structure
  parts: [
    {
      text: { type: String, required: true }, // Check if this is the right type
    },
  ],
});

// User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password length should be 6 characters long"],
  },
  ChatBotHistory: [chatHistorySchema],
  customerId: {
    type: String,
    default: "",
  },
  subscription: {
    type: String,
    default: "",
  },
});

// Hash password before saving user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Match password method
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Sign Token method
userSchema.methods.getSignedToken = function (res) {
  // Generate access token
  const accessToken = JWT.sign(
    { id: this._id },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: "15d" } // Default to 15 minutes   parseInt(process.env.JWT_ACCESS_EXPIREIN) ||
  );

  // Generate refresh token
  const refreshToken = JWT.sign(
    { id: this._id },
    process.env.JWT_REFRESH_TOKEN,
    { expiresIn: parseInt(process.env.JWT_REFRESH_EXPIREIN) || "15d" } // Default to 15 days
  );

  // Set refresh token as cookie
  res.cookie("refreshToken", refreshToken, {
    maxAge: 86400 * 15 * 1000, // 15 days in milliseconds
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
    sameSite: "strict",
  });

  return { accessToken, refreshToken };
};

const User = mongoose.model("User", userSchema);

export default User;
