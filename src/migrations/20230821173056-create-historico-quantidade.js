'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HistoricoQuantidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      produto_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Produtos', Key: 'id'}
      },
      quantidade_antiga: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_mudanca: {
        type: Sequelize.DATEONLY,
        defaultValue: new Date(),
        allowNull: false
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
    await queryInterface.dropTable('HistoricoQuantidades');
  }
};