const express = require('express')
const MonumentoHistoricoBusiness = require('../business/MonumentoHistoricoBusiness')

const monumentoHistorio = new MonumentoHistoricoBusiness()
const monumentoHistoricoRouter = express.Router()

monumentoHistoricoRouter.post('/create', async (req, res, next) => {
    try {
        const result = await monumentoHistorio.create(req.body)
        res.json(result)
    } catch (error) {
        next(error)
    }
})

monumentoHistoricoRouter.get('/getAll', async (req, res, next) => {
    try {
        const monumentos = await monumentoHistorio.getAll(req.query.page)
        res.json(monumentos)
    } catch (error) {
        next(error)
    }
})
module.exports = monumentoHistoricoRouter;