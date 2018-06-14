const express = require('express')
const BeachesBusiness = require('../business/BeachesBusiness')

const beach = new BeachesBusiness()
const BeachesRouter = express.Router()

BeachesRouter.post('/create', (req, res) => {
   beach.create(req.body)
        .then(result => res.status(201).json({ result }))
        .catch( err => res.status(400).json({ error: err.message }))
})

BeachesRouter.get('/getAll', (req, res) => {
    beach.getAll()
         .then(result => res.status(200).json({result}))
         .catch( err => res.status(400).json({ error: err.message }))
})
module.exports = BeachesRouter;