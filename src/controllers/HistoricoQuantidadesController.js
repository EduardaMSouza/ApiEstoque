const ErroBase = require('../Erros/ErroBase');
const HistoricoQuantidadesService = require('../services/HistoricoQuantidadesServices');


const historicoQuantidadesService = new HistoricoQuantidadesService();


class HistoricoQuantidadesController{
  static async pegaHistoricoQuantidades(req, res, next) {
    try{
      const HistoricoQuantidadesResultado = await historicoQuantidadesService.pegaRegistros();
      if(!HistoricoQuantidadesResultado){
        new ErroBase().enviarResposta(res);
      }
      res.status(200).json(HistoricoQuantidadesResultado);
    }catch(erro){
      next(erro);
    }
  }
  static async pegaHistoricoQuantidadesPorProduto(req, res, next) {
    try{
      const { id } = req.params;
      const HistoricoQuantidadesResultado = await historicoQuantidadesService
        .historicosPorId(id);
      if(!HistoricoQuantidadesResultado){
        new ErroBase().enviarResposta(res);
      }
      res.status(200).json(HistoricoQuantidadesResultado);
    }catch(erro){
      next(erro);
    }
  }
}


module.exports = HistoricoQuantidadesController;