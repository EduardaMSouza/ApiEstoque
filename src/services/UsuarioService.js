const Services = require('./services');
const database = require('../models');
const ErroRequisicao = require('../Erros/ErroRequisicao');
const { hash } = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

class UsuarioService extends Services {
  constructor() {
    super('Usuarios');
  }

  async novoUsuario(dto) {
    const email = await database[this.nomeModelo].findOne({where: { email: dto.email}});
    if (email) {
      throw new ErroRequisicao('Email já cadastrado');
    }
    const senhaHash = await hash(dto.senha, 8)
    console.log(senhaHash);
    return await this.novoRegistro({
      id: uuidv4(),
      nome: dto.nome,
      email: dto.email,
      senha: senhaHash
    });
  }
}

module.exports = UsuarioService;