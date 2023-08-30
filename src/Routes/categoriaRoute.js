const CategoriaController = require('../controllers/CategoriaController');
const Router = require('express');


const router = Router();

router
  .get('/categorias', CategoriaController.pegaCategorias)
  .get('/categorias/busca', CategoriaController.pegaCategoriasPorInformacoes)
  .get('/categorias/:id', CategoriaController.pegaUmaCategorias)
  .post('/categorias', CategoriaController.novaCategoria)
  .post('/categorias/:id', CategoriaController.recuperarCategoria)
  .put('/categorias/:id', CategoriaController.atualizaCategoria)
  .delete('/categorias/:id', CategoriaController.exlcuiCategoria)


module.exports = router;
