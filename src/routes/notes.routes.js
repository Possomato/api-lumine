const {Router} = require('express')
const NotesController = require('../controllers/notesController')

const notesController = new NotesController

const notesRouter = Router()

notesRouter.post('/:user_id', notesController.create)

module.exports = notesRouter