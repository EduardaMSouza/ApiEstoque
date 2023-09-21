const Services = require("./services");
const database = require('../models');
const { Op } = require('sequelize')


class SegurancaService extends Services {
  constructor() {
    super();
  }

  async cadastrarSeguranca(dto) {
    const usuario = await database.Usuarios.findOne({
      include: [{
        model: database.Roles,
        as: 'usuario_roles',
        attributes: ['id', 'nome', 'descricao'],
        through: {
          attributes: [],
      }
      }],
      where: {
        id: dto.usuarioId
      }
    })
    if(!usuario) {
      return new Error('Usuário não encontrado');
    }
    const rolesCadastradas = await database.Roles.findAll({
      where: {
        id: {
          [Op.in]: dto.roles
        }
      }
    })
    
    await usuario.removeUsuario_roles(usuario.usuario_roles)
    // await usuario.removeUsuario_permissoes(usuario.usuario_permissoes)

    await usuario.addUsuario_roles(rolesCadastradas)
    // await usuario.addUsuario_permissoes(PermissoesCadastradas)

    const novoUsuario = await database.Usuarios.findOne({
      include: [
        {
        model: database.Roles,
        as: 'usuario_roles',
        attributes: ['id', 'nome', 'descricao'],
        through: {
          attributes: [],
      }
      }
    ],
      where: {
        id: dto.usuarioId
      }
  })
    console.log(novoUsuario)
    return novoUsuario;
  }



  async cadastarPermissoesRoles(dto) {
    const role = await database.Roles.findOne({
      include: [{
        model: database.Permissoes,
        as: 'roles_das_permissoes',
        attributes: ['id', 'nome', 'descricao'],
        through: {
          attributes: [],
      },
      
      }],
      where: {
        id: dto.roleId
    }
    })
    console.log('entrei')

    if(!role) {
      throw new Error('Role nao cadastrada')
    }
    const permissoesCadastradas = await database.Permissoes.findAll({
      where: {
        id: {
          [Op.in]: dto.permissoes
        }
      }
    })
    await role.removeRoles_das_permissoes(role.roles_das_permissoes)
    await role.addRoles_das_permissoes(permissoesCadastradas)
    console.log(role);

    const novaRole = await database.Roles.findOne({
      include: [{
        model: database.Permissoes,
        as: 'roles_das_permissoes',
        attributes: ['id', 'nome', 'descricao'],
        through: {
          attributes: [],
      }
      }],
      where: {
        id: dto.roleId
      }
    })
    console.log(novaRole)

    return novaRole;
  }
}

module.exports = SegurancaService;