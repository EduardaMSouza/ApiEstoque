const { Router } = require('express');
const SegurancaController = require('../controllers/SegurancaController');
const roles = require('../middlewares/roles');


const router = Router();

router
  
  .post('/seguranca/acl', roles('seguranca'), SegurancaController.cadastrarSeguranca)
  .post('/seguranca/permissoes-roles', roles('seguranca'), SegurancaController.cadastrarPermissoesRoles)




module.exports = router;