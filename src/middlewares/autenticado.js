const { verify , decode } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret');
const ErroNaoAutorizado = require('../Erros/ErroNaoAutorizado');


module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token)
  if(!token) {
    return new ErroNaoAutorizado().enviarResposta(res);
  }

  const [, accessToken] = token.split(" ");
  try{
    console.log(accessToken)
    console.log(jsonSecret.secret)
    verify(accessToken, jsonSecret.secret)
    console.log(accessToken)
    const { id, email} = await decode(accessToken);
    req.usuarioId = id;
    req.usuarioEmail = email;
    next();
  }catch(erro) {
    new ErroNaoAutorizado().enviarResposta(res);
  }

}