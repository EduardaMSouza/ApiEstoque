'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
  
    static associate(models) {
      Categorias.hasMany(models.Produtos, {
        foreignKey: 'categoria_nome',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Categorias.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'O campo nome deve estar preenchido!'},
        isAlpha: {msg: 'O campo nome só aceita letras.'},
        len: [3, 70]
      }
    },
    descricao: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'O campo descricao deve estar preenchido!'},
        len: [10, 200]
      }
    },
  }, {
    paranoid: true,
    sequelize,
    modelName: 'Categorias',
  });
  return Categorias;
};