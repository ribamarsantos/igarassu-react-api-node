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
        console.log(error)
        throw error;
    }
    
}

module.exports = MonumentoHistoricoBusiness;