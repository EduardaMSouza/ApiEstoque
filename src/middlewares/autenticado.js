const { verify , decode } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret');
const ErroNaoAutorizado = require('../Erros/ErroNaoAutorizado');
const database = require('../models')

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token)
  if(!token) {
    return new ErroNaoAutorizado().enviarResposta(res);
  }
  
  const [, accessToken] = token.split(" ");
  try{
    verify(accessToken, jsonSecret.secret)
    console.log('kkkkkkkkkkkkkkk')
    const { id, email } = await decode(accessToken);
    console.log('kkkkkkkkkkkkkkk')
    req.usuarioId = id;
    req.usuarioEmail = email;
    console.log('kkkkkkkkkkkkkkk')
    const carrinho = await database.CarrinhoIds.findOne({
      attributes: ['id'],
      where: { usuario_id: id } 
      });
    console.log('kkkkkkkkkkkkkkk')
    if(!carrinho) {
      const novoCarrinho = await database.CarrinhoIds.create({
        id: uuidv4(),
        carrinho_id: uuidv4(),
        usuario_id: id,
      })
      req.carrinhoId = novoCarrinho.dataValues.id;
    }else{
      console.log(carrinho.dataValues.id)
      req.carrinhoId = carrinho.dataValues.id;
    }
    console.log(req.usuarioId)
    console.log(req.usuarioEmail)
    console.log(req.carrinhoId)

    next();
  }catch(erro) {

    new ErroNaoAutorizado().enviarResposta(res);
  }


}