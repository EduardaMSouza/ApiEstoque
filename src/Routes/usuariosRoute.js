const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const autenticado = require('../middlewares/autenticado')

const router = Router();

router.use(autenticado);

router
  .get('/usuarios', UsuarioController.pegaUsuarios)
  .get('/usuarios/:id', UsuarioController.pegaUsuarioPorId)
  .post('/usuarios', UsuarioController.cadastrarUsuarios)
  .post('/usuarios/:id', UsuarioController.recuperaUsuarios)
  .put('/usuarios/:id', UsuarioController.atualizaUsuarios)
  .delete('/usuarios/:id', UsuarioController.deletaUsuarios)




module.exports = router;