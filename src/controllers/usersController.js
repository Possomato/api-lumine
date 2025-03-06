const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite')
class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body

    const database = await sqliteConnection()
    const checkUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    if(checkUserExists){
      throw new AppError('Este e-mail já está em uso!')
    }

    return res.status(201).json()
  }
}

module.exports = UsersController