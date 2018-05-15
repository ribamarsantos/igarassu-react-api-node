const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv').config()
const app = express();
const port = process.env.PORT || 5008;

// TODO: creaate a new file with mongoDB connection
mongoose.connect(process.env.DATABASEURL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});

app.use('/', express.static(`${__dirname}/front/build`));

app.get('/api/yo', (req, res) => {
  res.send({ payload: 'Yo!!!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/front/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}, on ${app.get('env')}`));