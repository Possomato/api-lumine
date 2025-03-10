const {Router} = require('express')
const UsersController = require('../controllers/usersController')

const usersController = new UsersController

const usersRouter = Router()

usersRouter.post('/', usersController.create)
usersRouter.put('/:id', usersController.update)

module.exports = usersRouter