const ErroBase = require("./ErroBase");


class ErroNaoAutorizado extends ErroBase{
  constructor(mensagem = 'Usuario não autorizado.'){
    super(mensagem, 401);
  }
}

module.exports = ErroNaoAutorizado;