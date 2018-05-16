const express = require('express')
const MonumentoHistoricoBusiness = require('../business/MonumentoHistoricoBusiness')

const monumentoHistorio = new MonumentoHistoricoBusiness()
const monumentoHistoricoRouter = express.Router()

monumentoHistoricoRouter.post('/create', (req, res) => {
     monumentoHistorio.create(req.body).then(result => res.status(201).json({ result }))
         .catch( err => res.status(400).json({ err }))
})

module.exports = monumentoHistoricoRouter;