'use strict';
const jsonSecret = require('../config/jsonSecret');
const { v4: UUIDV4 } = require('uuid');
const bcrypt = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Usuarios', [{
      id: UUIDV4(),
      nome: 'Eduarda',
      email: 'Eduarda@example.com',
      senha: await senhaHash('12345678910'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'Carla',
      email: 'Carla@example.com',
      senha: await senhaHash('12345678910'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};


async function senhaHash(senha) {
  return await bcrypt.hash(senha, 8);
}