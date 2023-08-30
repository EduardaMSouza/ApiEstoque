'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categorias', [
      {
        nome: 'Eletrônicos',
        descricao: 'Dispositivos eletrônicos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Roupas',
        descricao: 'Vestuário e acessórios',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Alimentos',
        descricao: 'Produtos alimentícios',
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
