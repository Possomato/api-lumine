const {Router} = require('express')

const usersRouter = require('./users.routes')
const testeRouter = require('./teste.routes')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/teste', testeRouter)

module.exports = routes