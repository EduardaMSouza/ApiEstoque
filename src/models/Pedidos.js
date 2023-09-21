'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedidos.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Pedidos.belongsTo(models.StatusCarrinho, {
        foreignKey:'status_nome',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Pedidos.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    carrinho_id: DataTypes.UUID,
    usuario_id: DataTypes.UUID,
    status_nome: DataTypes.BOOLEAN,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};