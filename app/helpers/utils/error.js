class ServerError extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode || 500;
      this.message = message || 'Error';
    }
}

const handleError = (err, res) => {
    const { statusCode, message } = err;
    res.status(statusCode || 500).json({
        statusCode,
        message
    });
};

module.exports = {
    ServerError,
    handleError
}