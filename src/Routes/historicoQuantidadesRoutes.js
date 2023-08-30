const HistoricoQuantidadesController = require('../controllers/HistoricoQuantidadesController');
const Router = require('express');



const router = Router();


router 
  .get('/historico/quantidades/', HistoricoQuantidadesController.pegaHistoricoQuantidades)
  .get('/historico/quantidades/:id', HistoricoQuantidadesController.pegaHistoricoQuantidadesPorProduto)



module.exports = router;