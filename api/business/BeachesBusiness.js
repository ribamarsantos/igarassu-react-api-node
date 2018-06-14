const BeachesBusinessRepository = require('../models/BeachesBusinessRepository')

function BeachesBusiness(){
    this.persistence = new BeachesBusinessRepository();
}

BeachesBusiness.prototype.create = async function(beach) {
    // 
    if(beach.title.length === 0 ) {
        throw new Error('Título não informado')
    }

    try {
       return  await this.persistence.create(beach)
    } catch (error) {
        throw error;
    }
    
}

BeachesBusiness.prototype.getAll = async function () {
    try {
        return await this.persistence.getAll();
    } catch (error) {
        throw error;
    }
}

module.exports = BeachesBusiness;