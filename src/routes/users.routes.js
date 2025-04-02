const {Router} = require('express')
const UsersController = require('../controllers/usersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersController = new UsersController

const usersRouter = Router()

usersRouter.post('/', usersController.create)
usersRouter.put('/', ensureAuthenticated, usersController.update)

module.exports = usersRouter