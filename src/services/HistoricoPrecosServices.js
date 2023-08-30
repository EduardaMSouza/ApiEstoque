const HistoricosServices = require('./ServicesHistoricos');


class HistoricoPrecoService extends HistoricosServices {
  constructor() {
    super('HistoricoPrecos');
  }
  
}

module.exports = HistoricoPrecoService;

