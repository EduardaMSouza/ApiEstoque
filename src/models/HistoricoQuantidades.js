'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistoricoQuantidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HistoricoQuantidades.belongsTo(models.Produtos, {
        foreignKey: 'produto_id'
      })
    }
  }
  HistoricoQuantidades.init({
    quantidade_antiga: DataTypes.INTEGER,
    data_mudanca: {
      type: DataTypes.DATEONLY,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'HistoricoQuantidades',
  });
  return HistoricoQuantidades;
};