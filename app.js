const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')

const { mongoose } = require('./api/db/mongoose')
const monumentoHistoricoRoute = require('./api/routes/MonumentoHistoricoRoute')

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(`${__dirname}/front/build`));

app.get('/api/yo', (req, res) => {
  res.send({ payload: 'Yo!!!' });
});
//=============================== ROUTES API
app.use('/monumento', monumentoHistoricoRoute)

//==========================================
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/front/build/index.html'));
});


app.use((err, req, res, next) => {
  console.log("[=============BEGIN STACK ERROR ====================== ]")
  console.log(err.stack)
  res.status(500).send({ error: err.message })
  console.log("[=============END STACK ERROR ====================== ]")
})

app.listen(port, () => console.log(`Listening on port ${port}, on ${app.get('env')}`));