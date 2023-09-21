const database = require('../models')

const roles = (listaRoles) => {
  return async (req, res, next) => {
    if(listaRoles) {
      return next();
    }
    const { usuarioId }= req;
    console.log(usuarioId)
    const usuario = await database.UsuariosRoles.findOne({
      attributes: ['role_id'],
      where: {
        usuario_id: usuarioId
      },
    })
    if(!usuario) {
      return new ErroNaoAutorizado().enviarResposta(res);
    }
    
    const permissaoNecessaria = await database.Permissoes.findOne({
      attributes: ['id'],
      where: {
        nome: listaRoles
      }
    })


    const permissoesRoles = await database.RolesPermissoes.findAll({
      attributes: ['permissao_id'],
      where: {
        role_id: usuario.dataValues.role_id
      }
    })


    if(!usuario || !permissoesRoles) {
      return res.status(401).send('Usuario não autorizado')
    }
    const permissoesCadastradas = await permissoesRoles
      .map((role) => role.dataValues.permissao_id)
      .some((role) => role.includes(permissaoNecessaria.id));

    if(!permissoesCadastradas) {
      return res.status(401).send('usuario nao possui acesso');
    }
    return next();
  }
}


module.exports = roles;