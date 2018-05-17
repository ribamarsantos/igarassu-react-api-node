const MonumentoHistoricoRepository = require('../models/MonumentoHistoricoRepository')

function MonumentoHistoricoBusiness(){
    this.persistence = new MonumentoHistoricoRepository();
}

MonumentoHistoricoBusiness.prototype.create = async function(monumentohistorico) {
    // 
    if(monumentohistorico.title.length === 0 ) {
        throw new Error('Título não informado')
    }

    try {
       return  await this.persistence.create(monumentohistorico)
    } catch (error) {
        throw error;
    }
    
}

MonumentoHistoricoBusiness.prototype.getAll = async function () {
    try {
        return await this.persistence.getAll();
    } catch (error) {
        throw error;
    }
}

module.exports = MonumentoHistoricoBusiness;