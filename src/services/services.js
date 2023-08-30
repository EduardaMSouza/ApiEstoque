const database = require('../models');


class Services{
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
  }
  async pegaRegistros() {
    return await database[this.nomeModelo].findAll();
  }
  async pegaUmRegistro(id) {
    return database[this.nomeModelo].findOne({where: {id: id}});
  }
  async pegaRegistrosPorInformacoes(where = {}) {
    return database[this.nomeModelo]
      .findAll({...where})
  }
  async novoRegistro(dadosNovoRegistro) {
    return database[this.nomeModelo]
      .create(dadosNovoRegistro);
  }
  async excluiRegistro(id) {
    return database[this.nomeModelo]
      .destroy({where: {id: id}});
  }
  async recuperaRegistro(id) {
    return database[this.nomeModelo]
      .restore({where: {id: id}});
  }
  async atualizaRegistro(dadosAtualizados, id) {
    return database[this.nomeModelo]
      .update(dadosAtualizados, {where: {id: id}});
  }
  async hardDeleteRegistro(id) {
    return await database[this.nomeModelo].destroy({where: {id: id}}, {force: true});
  }
}



module.exports = Services;