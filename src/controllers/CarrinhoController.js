const CarrinhoService = require('../services/CarrinhoService');
const carrinhoService = new CarrinhoService();

class CarrinhoController {
  static async adicionaProduto(req, res, next) {
    try {
      const { quantidade, produto_id } = req.body;
      const { usuarioId, carrinhoId } = req;
      await carrinhoService.adicionaProduto({produto_id, quantidade, usuarioId, carrinhoId});

      res.status(201).json({ message: 'Produto adicionado ao carrinho com sucesso' });
    } catch (error) {
      next(error);
    }
  }
  static async removerProdutos(req, res, next) {
    try {
      const { produto_id } = req.params;
      const { usuarioId, carrinhoId } = req;

      await carrinhoService.removerProduto({produto_id, usuarioId, carrinhoId});
      
      res.status(201).json({ message: 'Produto removido do carrinho com sucesso' });
    } catch (error) {
      next(error);
    }
  }
  static async obterProdutos(req, res, next) {
    try {
      const { carrinhoId, usuarioId } = req;
      const carrinho = await carrinhoService.obterProdutos({carrinhoId, usuarioId});
      res.status(200).json({carrinho: carrinho});
    } catch (error) {
      next(error);
    }
  }
  static async finalizarCompra(req, res, next) {
    try {
      const { carrinhoId, usuarioId } = req;
      const carrinho = await carrinhoService.finalizarCompra({carrinhoId, usuarioId});
      res.status(200).json({carrinho: carrinho});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CarrinhoController;