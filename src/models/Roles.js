'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roles.belongsToMany(models.Usuarios, {
        through: models.UsuariosRoles,
        as: 'roles_do_usuario',
        foreignKey: 'role_id'
      })
      Roles.belongsToMany(models.Permissoes, {
        through: models.RolesPermissoes,
        as: 'roles_das_permissoes',
        foreignKey: 'role_id'
      })
    }
  }
  Roles.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};