const ErroRequisicao = require('../Erros/ErroRequisicao');
const RoleService = require('../services/RoleService')
const roleService = new RoleService()

class RoleController {
    static async cadastrar(req, res, next) {
        const novoRole = req.body

        try {
            const role = await roleService.novoRole(novoRole);

            res.status(201).send(role)
        } catch (erro) {
            next(erro)
        }
    }

    static async buscarTodasRoles(req, res, next) {
        const roles = await roleService.pegaRegistros()
        
        res.status(200).json(roles)
    }
    
    static async buscarRolePorId(req, res, next) {       
        try {
            const { id } = req.params;
            const role = await roleService.pegaUmRegistro(id)
            if(!role) {
                new ErroRequisicao().enviarResposta(res);
            }
            res.status(200).json(role)
            
        } catch (erro) {
            next(erro); 
        }
    }
    
    static async deletarRolePorId(req, res, next) {
        const { id } = req.params
        
        try {
            await roleService.excluiRegistro(id)
            
            res.status(200).send({ message: 'Role deletada com sucesso!' })
            
        } catch (erro) {
            next(erro); 
        }
    }
    
    static async editarRole(req, res, next) {
        const { id } = req.params
        const { nome, descricao } = req.body
        
        try {
            const role = await roleService.atualizaRegistro({ id, nome, descricao })
            
            res.status(200).json(role)
        } catch (erro) {
            next(erro);
        }
    }
}

module.exports = RoleController;