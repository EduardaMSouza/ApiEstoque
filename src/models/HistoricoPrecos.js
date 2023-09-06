'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistoricoPrecos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HistoricoPrecos.belongsTo(models.Produtos, {
        foreignKey: 'produto_id',
        onUpdate: 'CASCADE'
      })
    }
  }
  HistoricoPrecos.init({
    preco_antigo: DataTypes.FLOAT,
    data_mudanca: {
      type: DataTypes.DATEONLY,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'HistoricoPrecos',
  });
  return HistoricoPrecos;
};