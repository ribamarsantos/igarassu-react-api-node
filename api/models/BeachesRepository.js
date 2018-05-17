const mongoose = require('mongoose')
const MODEL_NAME = 'Beaches'

function BeachesRepository() {
    this.schema = mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 1,
            trim: true
        },
        description: {
            type: String,
            trim: true,
            minlength: 1,
        },
        urlimg: {
            type: String,
            trim: true
        },
        location: {
            latitude: Number,
            longitude: Number
        }
    })

    mongoose.model(MODEL_NAME, this.schema)
}

BeachesRepository.prototype.create = async function(beach) {
    return await mongoose.model(MODEL_NAME)
            .create(beach)
            .then(payload => payload)
            .catch( error => {throw new Error(error)})

}