const { Router } = require('express');
const router = Router();

router
  .get('/pedidos')
  .get('/pedidos/:usuario_id')
  .post('/pedidos')
  .put('/pedidos/nome')
  .delete('/pedidos');

module.exports = router;
