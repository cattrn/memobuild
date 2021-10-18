class OperationalError extends Error {
  constructor(statusCode, message = 'Something went wrong') {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = OperationalError
