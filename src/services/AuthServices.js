const Services = require("./services");
const database = require('../models');
const UsuarioService = require("./UsuarioService");
const ErroRequisicao = require("../Erros/ErroRequisicao");
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');



class AuthService extends UsuarioService{
  constructor() {
    super();
  }
  async login(dto) {
    console.log('entrei');
    const usuario = await database[this.nomeModelo].findOne({
      attributes: ['id', 'email', 'senha'],
      where: {
        email: dto.email
      }
    })
    if (usuario === null) {
      return new ErroRequisicao('Usuario inexistente') ;
    }
    console.log('entrei');
      
    const senhasIguais = await compare(dto.senha, usuario.senha);
    console.log(senhasIguais)
    if(!senhasIguais) {
      return new ErroRequisicao('Usuario ou senha incorretos');
    }
    console.log('entrei');

    const accessToken = sign({
      id: usuario.id,
      email: usuario.email
  },  jsonSecret.secret, 
  { 
    expiresIn: 86400
  });
  console.log('entrei');

  return { accessToken };
  }
}

module.exports = AuthService;