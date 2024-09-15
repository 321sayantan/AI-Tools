class ErrorResponse extends Error {
    constructor(message, statusCode) {
      super(message);
      console.log(message)
      this.statusCode = statusCode;
    }
  }
  
  export default ErrorResponse;
  