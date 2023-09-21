const Services = require("./services");
const { v4: uuidv4 } = require('uuid');
const database = require('../models')

class CarrinhoService extends Services{
    constructor() {
        super('Carrinhos');
    }

    async adicionaProduto(dto) {
      const produto = await database.Produtos.findOne({
        attributes: ['preco'],
        where: {
          id: dto.produto_id
        }
      }) 
      const total = dto.quantidade * produto.dataValues.preco;
      console.log({
        produto_id: dto.produto_id,
        quantidade: dto.quantidade,
        usuario_id: dto.usuarioId,
        carrinho_id: dto.carrinhoId,
        total: total
      })
        return await database[this.nomeModelo].create(
          {
            id: uuidv4(),
            produto_id: dto.produto_id,
            quantidade: dto.quantidade,
            usuario_id: dto.usuarioId,
            carrinho_id: dto.carrinhoId,
            total: total
          });
    }

    async removerProduto(dto) {
      console.log(dto)
      return await database.Carrinhos.destroy({
        where: {
          carrinho_id: dto.produto_id
        }
        && {
          carrinho_id: dto.carrinhoId
        }
        && {
          usuario_id: dto.usuarioId
        }
      })
    }

    async obterProdutos(dto) {
      console.log(dto)
      return await database.Carrinhos.findAll({
        where: {
          carrinho_id: dto.carrinhoId
        }
        && {
          usuario_id: dto.usuarioId
        }
      })
    }
    async finalizarCompra(dto) {
      const carrinho = await database.Carrinhos.findAll({
        where: {
          carrinho_id: dto.carrinhoId
        }
      })
      const total = await carrinho.map((item) => item.dataValues.total).reduce((a, b) => a + b, 0);  
      console.log(total)
      console.log({
        id: uuidv4(),
        carrinho_id: dto.carrinhoId,
        usuario_id: dto.usuarioId,
        status_nome: 'processando',
        total: total
      })
      const pedido = await database.Pedidos.create({
        id: uuidv4(),
        carrinho_id: dto.carrinhoId,
        usuario_id: dto.usuarioId,
        status_nome: 'processando',
        total: total
      })
      await carrinho.forEach(async (item) => {
        const pedido = await database.PedidosFeitos.create({
          id: uuidv4(),
          carrinho_id: dto.carrinhoId,
          produto_id: item.dataValues.produto_id,
          quantidade: item.dataValues.quantidade,
          total: item.dataValues.total
        })
        console.log(pedido)
      })
      console.log('kkkkkkkkkkkkk')
      await database.CarrinhoIds.destroy({where: {usuario_id: dto.usuarioId}});
      await database.Carrinhos.destroy({where: {usuario_id: dto.usuarioId}});
      await database.CarrinhoIds.create({
        id: uuidv4(),
        usuario_id: dto.usuarioId,
      })
      return pedido;
    }
}


module.exports = CarrinhoService;