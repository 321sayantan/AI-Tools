import ErrorResponse from "../utils/errorResponse.js"; // Use proper import and correct file name

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose cast error
  if (err.name === "CastError") {
    const message = "Resources Not Found";
    error = new ErrorResponse(message, 404);
  }

  // Duplicate key error
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

export default errorHandler;
