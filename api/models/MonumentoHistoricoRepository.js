const mongoose = require('mongoose')
const MODEL_NAME = 'MonumentoHistorico'
const LIMIT_PAGE = 15;

function MonumentoHistoricoRepository() {

    this.schema = mongoose.Schema({
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
        location: {
            latitude: { type: Number },
            longitude: { type: Number }
        }
    });

    mongoose.model(MODEL_NAME, this.schema);

}

MonumentoHistoricoRepository.prototype.create = async function (monumentohistorico) {
    try {
        return await mongoose.model(MODEL_NAME).create(monumentohistorico)
    } catch (error) {
        throw error;
    }
}

MonumentoHistoricoRepository.prototype.getAll = async function (page = 1) {
    try {
        let skip = LIMIT_PAGE * (page - 1)
        return await mongoose.model(MODEL_NAME).find().limit(20).skip(skip);
    } catch (error) {
        throw error
    }
}



module.exports = MonumentoHistoricoRepository;