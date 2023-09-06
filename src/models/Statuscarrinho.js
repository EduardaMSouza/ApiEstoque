'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusCarrinho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StatusCarrinho.hasMany(models.Pedidos, {
        foreignKey:'status_nome',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  StatusCarrinho.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StatusCarrinho',
  });
  return StatusCarrinho;
};