const mongoose = require('mongoose')

export const MonumentoHistorico = new mongoose.Schema({
     title: String,
     description: String,
     url_img: String   
});