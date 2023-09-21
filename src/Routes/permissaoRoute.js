const { Router } = require('express');
const PermissaoController = require('../controllers/PermissaoController');
const roles = require('../middlewares/roles');


const router = Router();

router
  .get('/permissoes', roles('seguranca'), PermissaoController.buscarTodasPermissoes)
  .get('/permissoes/:id', roles('seguranca'), PermissaoController.buscarPermissaoPorId)
  .post('/permissoes', roles('seguranca'), PermissaoController.cadastrar)
  .delete('/permissoes/:id', roles('seguranca'), PermissaoController.deletarPermissaoPorId)
  .put('/permissoes/:id', roles('seguranca'), PermissaoController.editarPermissao)


module.exports = router;