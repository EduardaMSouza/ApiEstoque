'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permissoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Permissoes.belongsToMany(models.Usuarios, {
        through: models.UsuariosPermissoes,
        as: 'permissoes_do_usuario',
        foreignKey: 'permissao_id'
      })
      Permissoes.belongsToMany(models.Roles, {
        through: models.RolesPermissoes,
        as: 'permissoes_das_roles',
        foreignKey: 'permissao_id'
      })
    }
  }
  Permissoes.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permissoes',
  });
  return Permissoes;
};