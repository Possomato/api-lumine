require('dotenv/config')
require('express-async-errors')

const migrationsRun = require('./database/sqlite/migrations')

const AppError = require('./utils/AppError')
const express = require('express')
const app = express()

const cors = require('cors')
const routes = require('./routes')

const PORT = process.env.PORT || 6548

migrationsRun();

app.use(cors())
app.use(express.json())
app.use(routes)

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
