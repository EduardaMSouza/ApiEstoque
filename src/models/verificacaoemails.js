'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VerificacaoEmails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        VerificacaoEmails.belongsTo(models.Usuarios, {
          foreignKey: 'usuario_id',
          targetKey: 'id'
        });
    }
  }
  VerificacaoEmails.init({
    usuario_id: DataTypes.UUID,
    codigoVerificacao: DataTypes.STRING,
    expiresIn: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VerificacaoEmails',
  });
  return VerificacaoEmails;
};