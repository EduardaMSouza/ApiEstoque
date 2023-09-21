'use strict';

const { v4: UUIDV4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('StatusCarrinhos', [{
      id: UUIDV4(),
      nome: 'processando',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'entregue',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('StatusCarrinhos', null, {});
  }
};
