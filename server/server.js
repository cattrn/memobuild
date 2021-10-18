const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const errorHandler = require('./middleware/errorHandler')
const OperationalError = require('./utils/OperationalError')
const photoRoutes = require('./routes/api/photos.routes')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Route middleware
app.use('/api/photo', photoRoutes)

app.use((req, res, next) =>
  next(new OperationalError(404, `Page not found at ${req.originalUrl}`))
)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
