const express = require('express')
const MonumentoHistoricoBusiness = require('../business/MonumentoHistoricoBusiness')

const monumentoHistorico = new MonumentoHistoricoBusiness()
const monumentoHistoricoRouter = express.Router()

monumentoHistoricoRouter.post('/create', (req, res) => {
    monumentoHistorico.create(req.body)
                      .then(result => res.status(201).json({ result }))
                     .catch( err => res.status(400).json({ error: err.message }))
})

monumentoHistoricoRouter.get('/getAll', (req, res) => {
    monumentoHistorico.getAll()
                     .then(result => res.status(200).json({result}))
                     .catch( err => res.status(400).json({ error: err.message }))
})
module.exports = monumentoHistoricoRouter;