const Services = require('./services');
const database = require('../models');
const { Op } = require('sequelize');




class HistoricosServices extends Services {
  constructor(nomeModelo) {
    super(nomeModelo);
  }
  async historicosPorId(id) {
    console.log(id);
    const resultados = await database[this.nomeModelo].findAll({where: {produto_id:{[Op.eq]: id}}});
    if(resultados){
      return resultados;
    }else{
      return [];
    }
  }

}


module.exports = HistoricosServices;