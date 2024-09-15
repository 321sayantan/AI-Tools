import errorHandler from "../middlewares/errorMiddleware.js";
import userModel from "../models/userModel.js";
import errorResponse from "../utils/errorResponse.js";

// JWT TOKEN
export const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken(res);
  console.log(token)
  res.status(statusCode).json({
    success: true,
    token,
  });
};

// REGISTER
export const registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // existing user
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return next(new errorResponse("Email is already registered", 500));
    }
    const user = await userModel.create({ username, email, password });
    sendToken(user, 201, res);
  } catch (error) {
    console.log(1,error);
    next(error);
  }
};

// LOGIN
export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    // validation
    if (!email || !password) {
      return next(new errorResponse("Please provide email and password"));
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(new errorResponse("Invalid Credentials", 401));
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new errorResponse("Invalid Credentials", 401));
    }
    // response
    sendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// LOGOUT
export const logoutController = async (req, res) => {
  res.clearCookie("refreshToken");
  return res.status(200).json({
    success: true,
    message: "Logout Successfully",
  });
};
