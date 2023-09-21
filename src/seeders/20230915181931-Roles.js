'use strict';

const { v4: UUIDV4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [{
      id: UUIDV4(),
      nome: 'admin',
      descricao: 'Administrador',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'user',
      descricao: 'Usuário',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
