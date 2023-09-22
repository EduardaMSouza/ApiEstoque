const { Router } = require('express');
const AuthController = require('../controllers/AuthController');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router
  .post('/auth/login', AuthController.login)
  .post('/auth/verificacao', AuthController.verificacaoEmail)
  .post('/auth/cadastro', UsuarioController.cadastrarUsuarios)
  .post('/auth/refresh', AuthController.refresh)


module.exports = router;
