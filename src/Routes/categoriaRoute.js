const CategoriaController = require('../controllers/CategoriaController');
const Router = require('express');
const roles = require('../middlewares/roles');


const router = Router();

router
  .get('/categorias', roles('vizualizar'), CategoriaController.pegaCategorias)
  .get('/categorias/busca', roles('vizualizar'), CategoriaController.pegaCategoriasPorInformacoes)
  .get('/categorias/:id', roles('vizualizar'), CategoriaController.pegaUmaCategorias)
  .post('/categorias', roles('cadastrar'), CategoriaController.novaCategoria)
  .post('/categorias/:id', roles('cadastrar'), CategoriaController.recuperarCategoria)
  .put('/categorias/:id', roles('atualizar'), CategoriaController.atualizaCategoria)
  .delete('/categorias/:id', roles('excluir'), CategoriaController.exlcuiCategoria)


module.exports = router;
