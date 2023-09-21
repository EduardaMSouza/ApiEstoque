const SegurancaService = require('../services/SegurancaService');

const segurancaService = new SegurancaService();

class SegurancaController {
  static async cadastrarSeguranca (req, res, next) {
    try {
      const { roles, usuarioId} = req.body;
      // const { usuarioId } = req;
      console.log(usuarioId);
      const novoUsuario = await segurancaService.cadastrarSeguranca({roles, usuarioId});
      res.status(201).json(novoUsuario);
    } catch (erro) {
      next(erro)
    }
  }
  static async cadastrarPermissoesRoles(req, res, next) {
    try{      
      const { permissoes, roleId } = req.body;
      const permissaoRole = await segurancaService.cadastarPermissoesRoles({roleId, permissoes})
      console.log(permissaoRole)
      res.status(201).json(permissaoRole);
    }catch(erro) {
      next(erro);
    }
  }
}


module.exports = SegurancaController;