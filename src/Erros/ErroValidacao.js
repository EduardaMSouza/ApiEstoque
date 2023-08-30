const ErroRequisicao = require('./ErroRequisicao');

class ErroValidacao extends ErroRequisicao{
  constructor(erro){
    const mensagensErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");
    super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

module.exports = ErroValidacao;