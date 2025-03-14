const {Router} = require('express')
const NotesController = require('../controllers/notesController')

const notesController = new NotesController
const notesRouter = Router()

notesRouter.post('/:user_id', notesController.create)
notesRouter.get('/:id', notesController.show)
notesRouter.get('/', notesController.index)
notesRouter.delete('/:id', notesController.delete)

module.exports = notesRouter