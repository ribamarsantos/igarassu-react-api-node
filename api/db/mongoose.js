const mongoose = require('mongoose')
require('dotenv').config()

mongoose.Promise = global.Promise

const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 
const mongodbUri = process.env.DATABASEURL;

 
mongoose.connect(mongodbUri, options);
const conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', () => {                      
  console.log('MONGODB connected')
});

module.exports = { mongoose }