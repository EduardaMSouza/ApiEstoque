const HistoricosServices = require('./ServicesHistoricos');


class HistoricoQuantidadeService extends HistoricosServices {
  constructor() {
    super('HistoricoQuantidades');
  }
}

module.exports = HistoricoQuantidadeService;

