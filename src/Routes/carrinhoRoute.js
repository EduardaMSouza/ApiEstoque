const { Router } = require('express');
const CarrinhoController = require('../controllers/CarrinhoController');


const router = Router();

router
  .get('/carrinho', CarrinhoController.obterProdutos)
  .post('/carrinho/', CarrinhoController.adicionaProduto)
  .post('/carrinho/finalizar', CarrinhoController.finalizarCompra)
  .delete('/carrinho/:produto_id', CarrinhoController.removerProdutos)
  
  


module.exports = router;