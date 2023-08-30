const app = require('../app');
const bodyParser = require('body-parser');
const produtos = require('./produtoRoute');
const categorias = require('./categoriaRoute');
const historicoPrecos = require('./historicoPrecosRoute');
const historicoQuantidades = require('./historicoQuantidadesRoutes');




module.exports = app => {
  app.use(bodyParser.json(),
  produtos,
  categorias,
  historicoPrecos,
  historicoQuantidades
  )
};
