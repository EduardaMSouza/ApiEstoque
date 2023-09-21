'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarrinhoIds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CarrinhoIds.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id',
      })
    }
  }
  CarrinhoIds.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    usuario_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'CarrinhoIds',
  });
  return CarrinhoIds;
};