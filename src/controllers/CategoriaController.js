const database = require('../models');
const {CategoriaService} = require('../services');
const categoriaService = new CategoriaService();
const ErroBase = require('../Erros/ErroBase');
const ErroRequisicao = require('../Erros/ErroRequisicao');




class CategoriaController {
  static async pegaCategorias(req, res, next) {
    try{
      const categoriasResultado = await categoriaService.pegaRegistros();
      if(!categoriasResultado){
        new ErroBase().enviarResposta(res);
      }
      res.status(200).json(categoriasResultado);
    }catch(erro){
      next(erro);
    }
  }
  static async pegaUmaCategorias(req, res, next) {
    try{
      const { id } = req.params;
      const categoriaResultado = await categoriaService.pegaUmRegistro(id);
      if(!categoriaResultado){
        new ErroRequisicao('Id não encontrado').enviarResposta(res);
      }else{
        res.status(200).json(categoriaResultado);
      }
    }catch(erro){
      next(erro);
    }
  }
  static async pegaCategoriasPorInformacoes(req, res, next) {
    try{
      const categoriaResultado = await categoriaService.pegaCategoriaQuery(req);
      if(!categoriaResultado){
        new ErroRequisicao().enviarResposta(res);
      }
      res.status(200).json(categoriaResultado);
    }catch(erro){
      next(erro);
    }
  }
  // static async pegaCategoriasPorNome(req, res, next) {
  //   try{
  //     const { nomeCategoria } = req.params;
  //     const categoriasResultado = await categoriaService.pegaUmRegistro({where: {nome: nomeCategoria}});
  //     res.status(200).json(categoriasResultado);
  //   }catch(erro) {
  //     next(erro);
  //   }
  // }
  static async novaCategoria(req, res, next) {
    try{
      const dadosNovaCategoria = req.body;
      const novaCategoria = await categoriaService.novoRegistro(dadosNovaCategoria);
      if(!novaCategoria){
        new ErroBase().enviarResposta(res);
      }else{
        res.status(201).json(novaCategoria);
      }
    }catch(erro){
      next(erro);
    }
  }
  static async exlcuiCategoria(req, res, next) {
    try{
      const { id } = req.params;
      const resultado = await categoriaService.excluiRegistro(id);
      if(!resultado){
        new ErroRequisicao('Id não encontrado').enviarResposta(res);
      }else{
        res.status(204).send();
      }
    }catch(erro){
      // next(erro);
      res.status(500).send(erro);
    }
  }
  static async recuperarCategoria(req, res, next) {
    try{
      const { id } = req.params;
      const resultado = await categoriaService.recuperaRegistro(id);
      console.log(!resultado);
      if(!resultado){
        new ErroRequisicao('Id não encontrado').enviarResposta(res);
      }else{
        res.status(200).send({message: `Categoria de id ${id} recuperada`});
      }
    }catch(erro){
      next(erro);
    }
  }
  static async atualizaCategoria(req, res, next) {
    try{
      const dadosAtualizados = req.body;
      const { id } = req.params;
      const resultado = await categoriaService.atualizaRegistro(dadosAtualizados, id);
      console.log(resultado);
      if(!resultado[0]){
        new ErroRequisicao('Id não encontrado').enviarResposta(res);
      }
      else{
        res.status(200).send({message: `Categoria de id ${id} atualizada`});
      }
    }catch(erro){
      next(erro);
    }
  }
  static async hardDeleteDeCategorias(req, res, next) {
    try{
      const { id } = req.params;
      const resultado = await categoriaService.hardDeleteRegistro(id);
      if(!resultado){
        new ErroRequisicao('Id não encontrado').enviarResposta(res);
      }
      res.status(204).send();
    }catch(erro){
      next(erro);
    }
  }
}

module.exports = CategoriaController;