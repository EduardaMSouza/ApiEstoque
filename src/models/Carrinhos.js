'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrinhos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carrinhos.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Carrinhos.belongsTo(models.Produtos, {
        foreignKey: 'produto_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Carrinhos.init({
    usuario_id: DataTypes.UUID,
    produto_id: DataTypes.UUID,
    carrinho_id: DataTypes.UUID,
    quantidade: DataTypes.INTEGER,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Carrinhos',
  });
  return Carrinhos;
};