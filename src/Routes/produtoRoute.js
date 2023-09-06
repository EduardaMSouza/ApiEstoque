const ProdutoController = require('../controllers/ProdutoController');
const { Router } = require('express');
const roles = require('../middlewares/roles');
const autenticado = require('../middlewares/autenticado');



//
const router = Router();

router.use(autenticado);

router
  .get('/produtos',roles('usuario'), ProdutoController.pegaProdutos)
  .get('/produtos/preco', ProdutoController.pegaPorPreco)
  .get('/produtos/busca', ProdutoController.pegaProdutosPorInformacoes)
  .get('/produtos/:id', ProdutoController.pegaUmProdutos)
  .post('/produtos', ProdutoController.novoProduto)
  .post('/produtos/:id', ProdutoController.recuperarProduto)
  .put('/produtos/:id', ProdutoController.atualizaProduto)
  .delete('/produtos/:id', ProdutoController.exlcuiProduto)
  

module.exports = router;
