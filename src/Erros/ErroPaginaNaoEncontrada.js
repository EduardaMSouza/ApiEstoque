const ErroBase = require("./ErroBase");


class ErroPaginaNaoEncontrada extends ErroBase{
  constructor(mensagem = 'Página não encontrada.'){
    super(mensagem, 404);
  }
}

module.exports = ErroPaginaNaoEncontrada;