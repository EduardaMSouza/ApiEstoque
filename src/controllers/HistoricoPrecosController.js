const ErroBase = require('../Erros/ErroBase');
const HistoricoPrecosService = require('../services/HistoricoPrecosServices');


const historicoPrecosService = new HistoricoPrecosService();


class HistoricoPrecosController{
  static async pegaHistoricoPrecos(req, res, next) {
    try{
      const HistoricoPrecosResultado = await historicoPrecosService.pegaRegistros();
      if(!HistoricoPrecosResultado){
        new ErroBase().enviarResposta(res);
      }
      res.status(200).json(HistoricoPrecosResultado);
    }catch(erro){
      next(erro);
    }
  }
  static async pegaHistoricoPrecosPorProduto(req, res, next) {
    try{
      const { id } = req.params;
      const HistoricoPrecossResultado = await historicoPrecosService
        .historicosPorId(id);
      if(!HistoricoPrecossResultado){
        new ErroBase().enviarResposta(res);
      }
      res.status(200).json(HistoricoPrecossResultado);
    }catch(erro){
      next(erro);
    }
  }
}


module.exports = HistoricoPrecosController;