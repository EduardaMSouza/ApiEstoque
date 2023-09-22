const ErroBase = require('../Erros/ErroBase');
const ErroRequisicao = require('../Erros/ErroRequisicao');
const UsuarioServices = require('../services/UsuarioService');


const usuarioServices = new UsuarioServices();

class UsuarioController{

  static async pegaUsuarios(req, res, next) {
    try{
      const usuarios = await usuarioServices.pegaRegistros();
      if(usuarios) {
        res.status(200).json(usuarios);
      }else{
        new ErroBase().enviarResposta(res);
      }
    }catch(erro) {
      next(erro);
    }
  }

  static async pegaUsuarioPorId(req, res, next) {
    try{
      const { id } = req.params;
      const resultadoUsuarios = await usuarioServices.pegaUmRegistro(id);
      if(!resultadoUsuarios) {
        new ErroRequisicao().enviarResposta(res);
      }else{
        res.status(200).json(resultadoUsuarios);
      } 
    }catch(erro) {
      next(erro);
    }
  }

  static async cadastrarUsuarios(req, res, next) {
    try {
      const { nome, senha, email } = req.body;
      const usuario = await usuarioServices.novoUsuario({ nome, senha, email});
      if(usuario){
        res.status(201).json({message: "Verifique a conta pelo email"});
      }else {
        new ErroBase().enviarResposta(res);
      }
    } catch (error) {
      next(error);
    }
  }

  static async atualizaUsuarios(req, res, next) {
    try{
      const { id } = req.params;
      const dadosAtualizacao = req.body;
      const resultadoAtualizacao = await usuarioServices.atualizaRegistro(dadosAtualizacao, id);
      if(!resultadoAtualizacao[0]) {
        new ErroRequisicao("Id não encontrado").enviarResposta(res);
      }else{
        res.status(204).send();
      }
    }catch(erro) {
      next(erro);
    }
  }
  
  static async deletaUsuarios(req, res, next) {
    try{
      const { id } = req.params;
      const resultadoDeletacao = await usuarioServices.excluiRegistro(id);
      if(!resultadoDeletacao) {
        new ErroRequisicao("Id não encontrado").enviarResposta(res);
      }else{
        res.status(204).send();
      }
    }catch(erro) {
      next(erro);
    }
  }  
  static async recuperaUsuarios(req, res, next) {
    try{
      const { id } = req.params;
      const resultadoRecuperacao = await usuarioServices.recuperaRegistro(id);
      if(!resultadoRecuperacao) {
        new ErroRequisicao("Id não encontrado").enviarResposta(res);
      }else{
        res.status(204).send();
      }
    }catch(erro) {
      next(erro);
    }
  }
}


module.exports = UsuarioController;