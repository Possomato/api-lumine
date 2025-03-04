const {Router} = require('express')

const testeRouter = Router()

testeRouter.post('/teste', (req, res) => {
    const {teste} = req.body
    res.json(teste)
})

module.exports = testeRouter