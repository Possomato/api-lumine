const  knex = require('../database/knex')
const AppError = require('../utils/AppError')
const {compare} = require('bcryptjs')

class SessionsController{
  async create(req, res){
    const {email, password} = req.body

    const user = await knex('users').where({email}).first()

    if(!user){
      throw new AppError('Senha e/ou e-mail incorretos!', 401)
    }

    const passwordMatched = await compare(password, user.password)

    if(!passwordMatched){
      throw new AppError('Senha e/ou e-mail incorretos!', 401)
    }

    return res.json(user)
  }
}

module.exports = SessionsController