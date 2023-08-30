'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produtos.belongsTo(models.Categorias, {
        foreignKey: 'categoria_nome'
      })
      Produtos.hasMany(models.HistoricoPrecos, {
        foreignKey: 'produto_id'
      })
      Produtos.hasMany(models.HistoricoQuantidades, {
        foreignKey: 'produto_id'
      })
    }
  }
  Produtos.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'O campo nome deve estar preenchido!'},
        isAlpha: {msg: 'O campo nome só aceita letras!'},
        len: {
          args: [2, 40],
          msg: 'O campo nome deve ter no mínimo 2 caracteres e no máximo 40'
        }
      }
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
      notNull: {msg: 'O campo preço deve estar preenchido!'},
      isNumeric: {msg: 'O campo preço deve ser preenchido apenas de números!'},
      min: {
        args: 1,
        msg: 'O campo preço deve ser no mínimo 1 real!'
      },
      max: {
        args: 1_000_000,
        msg: 'O campo preço deve ser no máximo 1_000_000 reais!'
      }}
    },
    quantidade_disponivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      notNull: {msg: 'O campo quantidade deve estar preenchido!'}
    },
  }, {
    paranoid: true,
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};