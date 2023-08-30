const ErroBase = require('../Erros/ErroBase');
const ErroRequisicao = require('../Erros/ErroRequisicao');
const database = require('../models');
const {ProdutoService} = require('../services');
const produtoService = new ProdutoService();


class ProdutoController {
  static async pegaProdutos(req, res, next) {
    try{
      const produtosResultado = await produtoService.pegaRegistros();
      if(!produtosResultado){
        new ErroBase().enviarResposta(res);
      }
      res.status(200).json(produtosResultado);
    }catch(erro){
      next(erro);
    }
  }
  static async pegaProdutosPorInformacoes(req, res, next) {
    try{
      const produtosResultado = await produtoService.pegaProdutosQuery(req);
      if(!produtosResultado){
        new ErroRequisicao().enviarResposta(res);
      }
      
      res.status(200).json(produtosResultado);
    }catch(erro){
      next(erro);
    }
  }
  static async pegaPorPreco(req, res, next) {
    try{
      const resultadoProdutos = await produtoService.pegaProdutosPorPreco(req);
      if(!resultadoProdutos){
        new ErroRequisicao().enviarResposta(res);
      }else{
        res.status(200).send(resultadoProdutos);
      }
    }catch(erro){
      next(erro);
    }
  }
  static async pegaUmProdutos(req, res, next) {
    try{
      const { id } = req.params;
      const produtosResultado = await produtoService.pegaUmRegistro(id);
      if(!produtosResultado){
        new ErroRequisicao('Id não encontrado').enviarResposta(res);
      }
      res.status(200).json(produtosResultado);
    }catch(erro){
      next(erro);
    }
  }
  static async novoProduto(req, res, next) {
    try{
      const dadosNovoProduto = req.body;
      const novoProduto = await produtoService.novoRegistro(dadosNovoProduto);
      if(!novoProduto){
        new ErroBase().enviarResposta(res);
      }
      res.status(201).send(novoProduto);
    }catch(erro){
      next(erro);
    }
  }
  static async exlcuiProduto(req, res, next) {
    try{
      const { id } = req.params;
      const resultado = await produtoService.excluiRegistro(id);
      if(!resultado){
        new ErroRequisicao('Id não encontrado').enviarResposta(res);
      }
      res.status(204).send({message: `Produto de id ${id} excluida com sucesso`});
    }catch(erro){
      next(erro);
    }
  }
  static async recuperarProduto(req, res, next) {
    try{
      const { id } = req.params;
      const resultado = await produtoService.recuperaRegistro(id);
      if(!resultado){
        new ErroRequisicao('Id não encontrado').enviarResposta(res);
      }
      res.status(200).send({message: `Produto de id ${id} recuperada`});
    }catch(erro){
      next(erro);
    }
  }
  static async atualizaProduto(req, res, next) {
    try{
      const dadosAtualizados = req.body;
      const { id } = req.params;
      const resultado =  await produtoService.atualizaProduto(dadosAtualizados, id);
      if(!resultado){
        new ErroRequisicao('Id não encontrado').enviarResposta(res);
      }else{
        res.status(200).send({message: `Produto de id ${id} atualizado`});
      }
    }catch(erro){
      next(erro);
    }
  }
  // static async hardDeleteDeProdutos(req, res, next) {
  //   try{
  //     const { id } = req.params;
  //     const resultado = await produtoService.hardDeleteRegistro(id);
  //     if(!resultado){
  //       new ErroRequisicao('Id não encontrado').enviarResposta(res);
  //     }
  //     res.status(204).send();
  //   }catch(erro){
  //     next(erro);
  //   }
  // }
}

// async function  pegaProdutosQuery() {
//   const { nome, categoria } = req.query;
//   if(nome && categoria) {
//     return await produtoService.pegaProdutosPorInformacoes({where: {nome: nome} &&
//       {categoria: categoria}});
//   }else if(nome) {
//     return await produtoService.pegaProdutosPorInformacoes({where: {nome: nome}});
//   }else if(categoria) {
//     return await produtoService.pegaProdutosPorInformacoes({where: {categoria: categoria}});
//   }
//   return null;
// }




// const { nome, categoria } = req.query;
//       if(nome){
//         const produtosResultado = await produtoService.pegaProdutosPorInformacoes({where: {nome: nome}});
//       }
//       if(categoria) {
//         const produtosResultado = await produtoService.pegaProdutosPorInformacoes({where: {categoria: categoria}});
//       }
//       res.status(200).json(produtosResultado);

module.exports = ProdutoController;