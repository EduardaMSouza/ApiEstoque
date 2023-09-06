const { Router } = require('express');


const router = Router();

router 
  .get('/statusCarrinho')
  .get('/statusCarrinho/:nome')
  .post('/statusCarrinho')
  .put('/statusCarrinho/nome')
  .delete('/statusCarrinho')




module.exports = router;