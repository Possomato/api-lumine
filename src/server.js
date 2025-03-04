const express = require('express')
const app = express()

const routes = require('./routes')

const PORT = 8080

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}/`)
})
