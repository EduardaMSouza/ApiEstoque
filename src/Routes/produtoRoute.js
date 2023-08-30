const ProdutoController = require('../controllers/ProdutoController');
const Router = require('express');




const router = Router();

router
  .get('/produtos', ProdutoController.pegaProdutos)
  .get('/produtos/preco', ProdutoController.pegaPorPreco)
  .get('/produtos/busca', ProdutoController.pegaProdutosPorInformacoes)
  .get('/produtos/:id', ProdutoController.pegaUmProdutos)
  .post('/produtos', ProdutoController.novoProduto)
  .post('/produtos/:id', ProdutoController.recuperarProduto)
  .put('/produtos/:id', ProdutoController.atualizaProduto)
  .delete('/produtos/:id', ProdutoController.exlcuiProduto)
  

module.exports = router;
