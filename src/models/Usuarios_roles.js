'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuariosRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UsuariosRoles.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id'
      })
    }
  }
  UsuariosRoles.init({
    usuario_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    role_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'UsuariosRoles',
  });
  return UsuariosRoles;
};