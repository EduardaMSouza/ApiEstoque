const HistoricoPrecosController = require('../controllers/HistoricoPrecosController');
const Router = require('express');


const router = Router();

router
  .get('/historico/precos', HistoricoPrecosController.pegaHistoricoPrecos)
  .get('/historico/precos/:id', HistoricoPrecosController.pegaHistoricoPrecosPorProduto)


module.exports = router;