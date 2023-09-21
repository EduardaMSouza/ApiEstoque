const ProdutoController = require('../controllers/ProdutoController');
const { Router } = require('express');
const roles = require('../middlewares/roles');




const router = Router();

// router.use(autenticado);

router
  .get('/produtos',roles('vizualizar'), ProdutoController.pegaProdutos)
  .get('/produtos/preco', roles('vizualizar'), ProdutoController.pegaPorPreco)
  .get('/produtos/busca', roles('vizualizar'), ProdutoController.pegaProdutosPorInformacoes)
  .get('/produtos/:id', roles('vizualizar'), ProdutoController.pegaUmProdutos)
  .post('/produtos', roles('adicionar'), ProdutoController.novoProduto)
  .post('/produtos/:id', roles('adicionar'), ProdutoController.recuperarProduto)
  .put('/produtos/:id', roles('atualizar'), ProdutoController.atualizaProduto)
  .delete('/produtos/:id', roles('atualizar'), ProdutoController.exlcuiProduto)
  

module.exports = router;
