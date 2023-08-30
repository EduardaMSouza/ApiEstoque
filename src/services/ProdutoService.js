const Services = require('./services');
const database = require('../models');
const { Op } = require('sequelize');


class ProdutoService extends Services {
  constructor() {
    super('Produtos');
    this.historico_precos = new Services('HistoricoPrecos');
    this.historico_quantidades = new Services('HistoricoQuantidades');
  }
  async atualizaProduto(dadosAtualizados,id) {
    const { preco, quantidade_disponivel } = dadosAtualizados;
    const produtoAntigo = await database[this.nomeModelo].findOne({where: {id: id}})
    if(preco){
      const novoPreco = {produto_id: id, preco_antigo: produtoAntigo.preco};
      await this.historico_precos.novoRegistro(novoPreco);
    }
    if(quantidade_disponivel){
      const novaQuantidade = {produto_id: id, quantidade_antiga: produtoAntigo.quantidade_disponivel};
      await this.historico_quantidades.novoRegistro(novaQuantidade);
    }
    return await this.atualizaRegistro(dadosAtualizados, id);
  }
  async pegaProdutosQuery(req) {
    const { nome, categoria } = req.query;
    const busca = []
    if (nome) {
      busca.push({ nome: { [Op.iLike]: `%${nome}%` } });
    }
  
    if (categoria) {
      busca.push({ categoria_nome: { [Op.iLike]: `%${categoria}%` } });
    }
  
    if (busca.length > 0) {
      console.log(busca);
      return await database[this.nomeModelo].findAll({ where: { [Op.and]: busca } });
  }
  }
  async pegaProdutosPorPreco(req) {
    const { minimo = 1, maximo = Infinity} = req.query;
    const resultados = await database[this.nomeModelo].findAll({where: {preco: {[Op.between]: [minimo, maximo]}}});
    if(resultados) {
      return resultados;
    }else{
      return [];
    }
  }

}

module.exports = ProdutoService;
