require('express-async-errors')

const database = require('./database/sqlite')

const AppError = require('./utils/AppError')
const express = require('express')
const app = express()

const routes = require('./routes')

const PORT = 8080

app.use(express.json())
app.use(routes)

database()

app.use((error, req, res, next) => {
  if(error instanceof AppError){
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  console.error(error)

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}/`)
})
