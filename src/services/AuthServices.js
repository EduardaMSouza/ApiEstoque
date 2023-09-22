const Services = require("./services");
const database = require('../models');
const UsuarioService = require("./UsuarioService");
const ErroRequisicao = require("../Erros/ErroRequisicao");
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');
const moment = require('moment');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');




class AuthService extends UsuarioService{
  constructor() {
    super();
  }
  async login(dto) {
    const usuario = await database[this.nomeModelo].findOne({
      attributes: ['id', 'email', 'senha', 'verificacaoEmail'],
      where: {
        email: dto.email
      }
    })
    console.log('saaaa',usuario)
    if (usuario === null) {
      return new ErroRequisicao('Usuario inexistente') ;
    }
      
    const senhasIguais = await compare(dto.senha, usuario.senha);
    console.log(senhasIguais)
    if(!senhasIguais) {
      return new ErroRequisicao('Usuario ou senha incorretos');
    }
    if(!usuario.verificacaoEmail) {
      return new ErroRequisicao('Email não verificado');
    }
    const accessToken = sign({
      id: usuario.id,
      email: usuario.email
  },  jsonSecret.secret, 
  { 
    expiresIn: '5d'
  });
  const refreshTokenExistente = await database.RefreshTokens.findAll({
    where: {
      usuario_id: usuario.id
    }
  })
   
  if(refreshTokenExistente) await database.RefreshTokens.destroy({
    where: {
      usuario_id: usuario.id
    }
  })
  console.log('lllllll')

  const carrinho = await database.CarrinhoIds.findOne({
    attributes: ['id'],
    where: { usuario_id: usuario.id }
  })
  console.log('lllllll')
  console.log(usuario.id)
  if(!carrinho) {
    const id = uuidv4();
    console.log('aaaaaaid: ', id)
    const carrinhoNovo = await database.CarrinhoIds.create({
      id: id,
      usuario_id: usuario.id,
    })
    console.log(carrinhoNovo)
  }
  console.log('lllllll')
  
  const refresh_token = crypto.randomBytes(24).toString('hex');
  const dataExpiracao = moment().add(100, 'd').unix();
  const tokenOpaco = await database.RefreshTokens.create({
    id: refresh_token,
    usuario_id: usuario.id,
    expiresIn: dataExpiracao
  })
  return { accessToken, tokenOpaco };
  }
  async refresh(refreshToken) {
    const tokenOpaco = await database.RefreshTokens.findOne({
      where: {
        id: refreshToken
      }
    })
    console.log('kfsokdfssssssss',tokenOpaco.dataValues.expiresIn)
    if(tokenOpaco.dataValues.expiresIn < moment().unix()) {
      await database.RefreshTokens.destroy({
        where: {
          id: refreshToken
        }
      })
      return new ErroRequisicao('Refresh Token expirado');
    }
    console.log(tokenOpaco)
    if(!tokenOpaco) {
      return new ErroRequisicao('Refresh Token invalido');
    }
    const usuario = await database.Usuarios.findOne({
      attributes: ['id', 'email'],
      where: {
        id: tokenOpaco.usuario_id
      }
    })
    console.log(usuario)
    if(!usuario) {
      return new ErroRequisicao('Usuario invalido');
    }
    const accessToken = sign({
      id: usuario.id,
      email: usuario.email
  },  jsonSecret.secret, 
  { 
    expiresIn: '5d'
  });
  return { accessToken };
}

async verificacaoEmail(dto) {
  try{
    
    const usuarioCadastrado = await database.Usuarios.findOne({
      attributes: ['id', 'email'],
      where: {
        email: dto.email
      }
    })
    if(!usuarioCadastrado) {
      return new ErroRequisicao('Usuario invalido');
    }
    const verificacaoEmail = await database.VerificacaoEmails.findOne({
      where: {
        codigoVerificacao: dto.codigo,
        usuario_id: usuarioCadastrado.dataValues.id
      }
    })
    console.log("eusoueeee",verificacaoEmail === null)
    if(!verificacaoEmail || verificacaoEmail === null) {
      return null;
    }
    console.log("eusoueeee", verificacaoEmail.expiresIn < moment().unix())
    if(verificacaoEmail.expiresIn < moment().unix()) {
      await database.VerificacaoEmails.destroy({
        where: {
          codigoVerificacao: dto.codigo,
          usuario_id: usuarioCadastrado.dataValues.id
        }
      })
      return null;
    }
    
    await database.Usuarios.update(
      { verificacaoEmail: true },
      { where: { id: usuarioCadastrado.dataValues.id } }
    )
    await database.VerificacaoEmails.destroy({
      where: {
        codigoVerificacao: dto.codigo,
        usuario_id: usuarioCadastrado.dataValues.id
      }
    })
    return true;
  }catch(erro) {
    throw ErroRequisicao('Codigo invalido'); 
  }
}
}

module.exports = AuthService;


