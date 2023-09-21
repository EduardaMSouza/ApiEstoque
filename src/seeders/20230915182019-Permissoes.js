'use strict';

const { v4: UUIDV4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Permissoes', [{
      id: UUIDV4(),
      nome: 'vizualizar',
      descricao: 'Permite vizualizar os dados',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'cadastrar',
      descricao: 'Permite criar novos dados',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'editar',
      descricao: 'Permite editar os dados',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'excluir',
      descricao: 'Permite deletar os dados',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'vizualizar usuario',
      descricao: 'Permite vizualizar os dados do usuario',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'atualizar usuario',
      descricao: 'Permite atualizar os dados do usuario',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'excluir usuario',
      descricao: 'Permite excluir os dados do usuario',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'seguranca',
      descricao: 'Permite vizualizar os dados de seguranca',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'adicionar',
      descricao: 'Permite adicionar os dados',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: UUIDV4(),
      nome: 'comprar',
      descricao: 'Permite comprar os dados',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Permissoes', null, {});
  }
};
