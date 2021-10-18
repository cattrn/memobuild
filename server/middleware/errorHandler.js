const errorHandler = (err, req, res, next) => {
  console.error(err)

  const statusCode = err.status || err.statusCode || err.response.status || 500
  const response = {
    success: false,
    error: {
      statusCode,
      message: err.isOperational ? err.message : 'Something went wrong.'
    }
  }

  if (process.env.NODE_ENV !== 'production') response.error.stack = err.stack

  res.status(statusCode).json(response)
}

module.exports = errorHandler
