const { ValidationError } = require('sequelize');
const ErroRequisicao = require('../Erros/ErroRequisicao');
const ErroPaginaNaoEncontrada = require('../Erros/ErroPaginaNaoEncontrada');
const ErroValidacao = require('../Erros/ErroValidacao');
const ErroBase = require('../Erros/ErroBase');

function manipuladorDeErros(erro, req, res, next) {
  if(erro.name = 'ValidationError'){
    new ErroValidacao(erro).enviarResposta(res);
  }else{
    new ErroBase().enviarResposta(res);
  }
}

module.exports = manipuladorDeErros;