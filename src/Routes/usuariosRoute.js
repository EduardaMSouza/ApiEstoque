const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const autenticado = require('../middlewares/autenticado');
const roles = require('../middlewares/roles');

const router = Router();

router.use(autenticado);

router
  .get('/usuarios', roles('seguranca'), UsuarioController.pegaUsuarios)
  .get('/usuarios/:id', roles('vizualizar usuario'), UsuarioController.pegaUsuarioPorId)
  .post('/usuarios', roles('cadastrar'), UsuarioController.cadastrarUsuarios)
  .post('/usuarios/:id', roles('cadastrar'), UsuarioController.recuperaUsuarios)
  .put('/usuarios/:id', roles('atualizar usuario'), UsuarioController.atualizaUsuarios)
  .delete('/usuarios/:id', roles('excluir usuario'), UsuarioController.deletaUsuarios)




module.exports = router;