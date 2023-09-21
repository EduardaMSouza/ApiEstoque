'use strict';

const { v4: UUIDV4 } = require('uuid'); 
const database = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UsuariosRoles', [{
      id: UUIDV4(),
      usuario_id: await buscaUsuario('Eduarda@example.com'),
      role_id: await buscaRole('admin'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      usuario_id: await buscaUsuario('Carla@example.com'),
      role_id: await buscaRole('user'),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UsuariosRoles', null, {});
  }
};

async function buscaUsuario(email) {
  const usuario = await database.Usuarios.findOne({
    where: {
      email: email  
    }})
  return usuario.dataValues.id;
}

async function buscaRole(nome) {
  const role = await database.Roles.findOne({
    where: {
      nome: nome  
    }})
  return role.dataValues.id;
}