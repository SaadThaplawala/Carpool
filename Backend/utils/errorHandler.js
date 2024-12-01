class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  const handleError = (err, res) => {
    const { message, statusCode = 500 } = err;
    res.status(statusCode).json({ error: message });
  };
  
  module.exports = { ErrorHandler, handleError };
  