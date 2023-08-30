const ErroPaginaNaoEncontrada = require('../Erros/ErroPaginaNaoEncontrada');

function manipulador404(req, res, next){
  const erro404 = new ErroPaginaNaoEncontrada().enviarResposta(res);
  next(erro404);
}

module.exports = manipulador404;