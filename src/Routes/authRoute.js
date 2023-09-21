const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

const router = Router();

router
  .post('/auth/login', AuthController.login)
  .post('/auth/refresh', AuthController.refresh)


module.exports = router;
