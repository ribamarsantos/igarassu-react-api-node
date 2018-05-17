const express = require('express')
const MonumentoHistoricoBusiness = require('../business/MonumentoHistoricoBusiness')

const monumentoHistorio = new MonumentoHistoricoBusiness()
const monumentoHistoricoRouter = express.Router()

monumentoHistoricoRouter.post('/create', (req, res) => {
    monumentoHistorio.create(req.body)
        .then(result => res.status(201).json({ result }))
        .catch(err => res.status(400).json({ error: err.message }))
})

monumentoHistoricoRouter.get('/getAll', (req, res) => {
    monumentoHistorio.getAll(req.query.page)
        .then(result => res.status(200).json({ result }))
        .catch(err => res.status(400).json({ error: err.message }))
})
module.exports = monumentoHistoricoRouter;