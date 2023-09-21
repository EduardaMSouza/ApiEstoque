const { Router } = require('express');
const RoleController = require('../controllers/roleController');
const roles = require('../middlewares/roles');


const router = Router();

router
  .get('/roles', roles('seguranca'), RoleController.buscarTodasRoles)
  .get('/roles/:id', roles('seguranca'), RoleController.buscarRolePorId)
  .post('/roles', roles('seguranca'), RoleController.cadastrar)
  .delete('/roles/:id', roles('seguranca'), RoleController.deletarRolePorId)
  .put('/roles/:id', roles('seguranca'), RoleController.editarRole)


module.exports = router;