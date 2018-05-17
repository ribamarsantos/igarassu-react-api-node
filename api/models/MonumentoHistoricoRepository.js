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
    return await mongoose.model(MODEL_NAME)
                         .create(monumentohistorico)
                         .then(payload => payload)
                         .catch( error => error )
}

MonumentoHistoricoRepository.prototype.getAll = async function( page = 1) {
    return await mongoose.model(MODEL_NAME)
                  .find()
                  .sort({ title: 'asc'})
                  .limit(20)
                  .exec()
                  .then(payload => payload)
                  .catch(error => error)
                         
}

module.exports =  MonumentoHistoricoRepository;