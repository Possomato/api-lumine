const {Router} = require('express')
const NotesController = require('../controllers/NotesController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const notesController = new NotesController
const notesRouter = Router()

notesRouter.use(ensureAuthenticated)

notesRouter.post('/', notesController.create)
notesRouter.get('/:id', notesController.show)
notesRouter.get('/', notesController.index)
notesRouter.delete('/:id', notesController.delete)

module.exports = notesRouter