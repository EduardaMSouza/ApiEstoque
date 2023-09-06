const SegurancaService = require('../services/SegurancaService');

const segurancaService = new SegurancaService();

class SegurancaController {
  static async cadastrarSeguranca (req, res, next) {
    try {
      const { roles, permissoes} = req.body;
      const { usuarioId } = req;
      const novoUsuario = await segurancaService.cadastrarSeguranca({roles, permissoes, usuarioId});
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