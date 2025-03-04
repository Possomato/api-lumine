const AppError = require('../utils/AppError')

class UsersController {
  create(req, res) {
    const { name, email, password } = req.body

    res.json({ name, email, password })
  }
}

module.exports = UsersController