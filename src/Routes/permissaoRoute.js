const { Router } = require('express');
const PermissaoController = require('../controllers/PermissaoController');


const router = Router();

router
  .get('/permissoes', PermissaoController.buscarTodasPermissoes)
  .get('/permissoes/:id', PermissaoController.buscarPermissaoPorId)
  .post('/permissoes', PermissaoController.cadastrar)
  .delete('/permissoes/:id', PermissaoController.deletarPermissaoPorId)
  .put('/permissoes/:id', PermissaoController.editarPermissao)


module.exports = router;