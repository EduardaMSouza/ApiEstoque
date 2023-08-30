'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categoria_nome: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'Categorias', key: 'nome'}
      },
      preco: {
        type: Sequelize.DOUBLE(10,2),
        allowNull: false
      },
      quantidade_disponivel: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        paranoid: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};