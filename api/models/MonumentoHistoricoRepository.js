const mongoose = require('mongoose')
const MODEL_NAME = 'MonumentoHistorico'

function MonumentoHistoricoRepository() {

    this.schema =  mongoose.Schema({
        title: {
            type: String,
            minlength: 1,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true
        },
        url_img: {
            type: String,
            trim: true
        },
        location:{
            latitude: {type: Number },
            longitude: {type: Number }
        }   
   });

   mongoose.model(MODEL_NAME,this.schema);

}

MonumentoHistoricoRepository.prototype.create = async function (monumentohistorico) {
    await mongoose.model(MODEL_NAME).create(monumentohistorico, (err, result) => {
        if(err) throw new Error(err);
    })
}

module.exports =  MonumentoHistoricoRepository;