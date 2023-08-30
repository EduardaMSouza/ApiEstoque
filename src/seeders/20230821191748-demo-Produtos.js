'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Produtos', [{
      preco: 10.99,
      categoria_nome: 'Eletrônicos',
      nome: 'Celular',
      quantidade_disponivel: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      preco: 25.50,
      categoria_nome: 'Roupas',
      nome: 'Camiseta',
      quantidade_disponivel: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      preco: 1500.00,
      categoria_nome: 'Eletrônicos',
      nome: 'Notebook',
      quantidade_disponivel: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      preco: 5.99,
      categoria_nome: 'Alimentos',
      nome: 'Chocolate',
      quantidade_disponivel: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      preco: 50.00,
      categoria_nome: 'Roupas',
      nome: 'Calça Jeans',
      quantidade_disponivel: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
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
