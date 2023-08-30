const Services = require('./services');
const { Op } = require('sequelize');
const database = require('../models')


class CategoriaService extends Services {
  constructor() {
    super('Categorias');
  }
  async pegaCategoriaQuery(req) {
    const { nome, descricao } = req.query;
    const busca = [];
    if (nome) {
      busca.push({ nome: { [Op.iLike]: `%${nome}%` } });
    }
  
    if (descricao) {
      busca.push({ descricao: { [Op.iLike]: `%${descricao}%` } });
    }
  
    if (busca.length > 0) {
      console.log(busca);
      return database[this.nomeModelo].findAll({ where: { [Op.and]: busca } });
  }
  }
}

module.exports = CategoriaService;

