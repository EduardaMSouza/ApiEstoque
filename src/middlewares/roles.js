const database = require('../models')

const roles = (listaRoles) => {
  return async (req, res, next) => {
    const { usuarioId }= req;
    console.log(req)
    const usuario = await database.Usuarios.findOne({
      include: [{
        model: database.Roles,
        as: 'usuario_roles',
        attributes: ['id', 'nome']
      }],
      where: {
        id: usuarioId
      }
    })
    if(!usuario) {
      return res.status(401).send('Usuario não cadastrado')
    }
    const rolesCadastradas = await usuario.usuario_roles
      .map((role) => role.nome)
      .some((role) => listaRoles.includes(role))
    if(!rolesCadastradas) {
      return res.status(401).send('usuario nao possui acesso');
    }
    return next();
  }
}


module.exports = roles;