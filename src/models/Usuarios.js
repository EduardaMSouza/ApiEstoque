'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Usuarios.hasMany(models.Carrinhos, {
        foreignKey: 'usuario_id',
        onDelete: 'CASCADE',
        onUpdate:  'CASCADE'
      })
      Usuarios.hasMany(models.Pedidos, {
        foreignKey: 'usuario_id',
        onDelete: 'CASCADE',
        onUpdate:  'CASCADE'
      })
      Usuarios.belongsToMany(models.Roles, {
        through: models.UsuariosRoles,
        as: 'usuario_roles',
        foreignKey: 'usuario_id'
      })
      Usuarios.belongsToMany(models.Permissoes, {
        through: models.UsuariosPermissoes,
        as: 'usuario_permissoes',
        foreignKey: 'usuario_id'
      })
    }
  }
  Usuarios.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'O campo nome deve estar preenchido'},
        notNull: {msg: 'O campo nome deve estar preenchido'},
        not: {
          args: ["^[a-z]+$",'g'],
          msg: 'O campo nome deve conter apenas letras'
        },
        len: {
          args: [2, 40],
          msg: 'O campo nome deve ter entre 2 e 40 caracteres'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'O campo email deve estar preenchido'},
        notNull: {msg: 'O campo email deve estar preenchido'},
        isEmail: {msg: 'O campo email deve ser um email válido'},
        len: {
          args: [10, 40],
          msg: 'O campo email deve ter entre 10 e 40 caracteres'
        }
      }
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {msg: 'O campo senha deve estar preenchido'},
        // len: {
        //   args: [6, 12],
        //   msg: 'O campo senha deve ter entre 6 e 12 caracteres'
        // }
      }
    },
  }, {
    sequelize,
    modelName: 'Usuarios',
    paranoid: true,
    defaultScope: {
      attributes: {
        exclude: ['senha']
      }
    }
  });
  return Usuarios;
};