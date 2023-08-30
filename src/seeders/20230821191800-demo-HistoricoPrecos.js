'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('HistoricoPrecos', [{
      produto_id: 1,
      preco_antigo: 9.99,
      data_mudanca: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      produto_id: 2,
      preco_antigo: 20.00,
      data_mudanca: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      produto_id: 3,
      preco_antigo: 1300.00,
      data_mudanca: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
