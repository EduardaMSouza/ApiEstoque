const { Router } = require('express');
const roles = require('../middlewares/roles');
const router = Router();

router
  .get('/pedidos', roles('seguranca'))
  .get('/pedidos/:usuario_id', roles('vizualizar'))
  .post('/pedidos', roles('comprar'))
  .put('/pedidos/:usuario_id')
  .delete('/pedidos', roles('seguranca'));

module.exports = router;
