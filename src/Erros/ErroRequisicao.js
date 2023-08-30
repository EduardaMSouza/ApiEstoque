const ErroBase = require("./ErroBase");


class ErroRequisicao extends ErroBase{
  constructor(mensagem = 'Requisição com informações inválidas.'){
    super(mensagem, 400);
  }
}

module.exports = ErroRequisicao;