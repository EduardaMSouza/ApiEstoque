const { Router } = require('express');
const RoleController = require('../controllers/roleController');


const router = Router();

router
  .get('/roles', RoleController.buscarTodasRoles)
  .get('/roles/:id', RoleController.buscarRolePorId)
  .post('/roles', RoleController.cadastrar)
  .delete('/roles/:id', RoleController.deletarRolePorId)
  .put('/roles/:id', RoleController.editarRole)


module.exports = router;