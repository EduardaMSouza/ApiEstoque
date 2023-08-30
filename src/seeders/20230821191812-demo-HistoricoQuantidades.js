'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('HistoricoQuantidades', [
      {
        produto_id: 1,
        quantidade_antiga: 90,
        data_mudanca: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        produto_id: 2,
        quantidade_antiga: 45,
        data_mudanca: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        produto_id: 3,
        quantidade_antiga: 28,
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
