const {Router} = require('express')

const usersRouter = Router()

usersRouter.post('/', (req, res) => {
  const {name, email, password} = req.body

  res.json({name, email, password})
})

module.exports = usersRouter