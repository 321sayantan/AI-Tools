import errorHandler from "../middlewares/errorMiddleware.js";
import userModel from "../models/usermodel.js";
import errorResponse from "../utils/errorResponse.js";

// JWT TOKEN
export const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken(res);
  // console.log(user)
  // console.log(token)

    // res.cookie("token", token.accessToken, {
    //   // httpOnly: true, // Makes the cookie inaccessible to JavaScript on the frontend
    //   // secure: true, // Ensure cookies are sent only over HTTPS (for production)
    //   maxAge: 3600000, // Expiry in milliseconds (1 hour here)
    //   // sameSite: "Strict", // Cookie is sent only to first-party requests
    // });

  res.status(statusCode).json({
    success: true,
    token,
  });
};

// REGISTER
export const registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check for existing user by email
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email is already registered" }); // Return error response
    }

    // Create new user
    const user = await userModel.create({ username, email, password });
    sendToken(user, 201, res);
  } catch (error) {
    console.log(error); // Log the error for debugging
    return res.status(500).json({ error: "Internal Server Error" }); // Generic error message
  }
};



// LOGIN
export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body)
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
