'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carrinhos', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      carrinho_id: {
      type: Sequelize.UUID,
      allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      usuario_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      },
      produto_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Produtos',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carrinhos');
  }
};