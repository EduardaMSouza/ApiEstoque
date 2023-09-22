const Services = require('./services');
const database = require('../models');
const ErroRequisicao = require('../Erros/ErroRequisicao');
const { hash } = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const verificacaoEmail = require('./Email');



class UsuarioService extends Services {
  constructor() {
    super('Usuarios');
  }

  async novoUsuario(dto) {
    console.log(typeof dto.email)
    const email = await database.Usuarios.findAll({
      attributes: ['id', 'email', 'senha', 'verificacaoEmail'],
      where: {
        email: dto.email
      }
    });

    console.log('kkkkkkkkkkkkk')
    console.log('kkkkkkkkkkkkkkkkkkkkkkkk',email)
    const senhaHash = await hash(dto.senha, 8);
    if (email.length > 0) {
      return await verificacaoEmail(email);
    }
    console.log(senhaHash)
    console.log('kkkkkkkkkkkkk')
    console.log({
      id: uuidv4(),
      nome: dto.nome,
      email: dto.email,
      senha:  senhaHash,
      verificacaoEmail: false,
    })
    const novoUsuario = await this.novoRegistro({
      id: uuidv4(),
      nome: dto.nome,
      email: dto.email,
      senha:  senhaHash,
      verificacaoEmail: false,
    });
    await database.CarrinhoIds.create({
      id: uuidv4(),
      carrinho_id: uuidv4(),
      usuario_id: novoUsuario.id,
    })
    await verificacaoEmail([novoUsuario]);

    return novoUsuario;
  }
}

module.exports = UsuarioService;