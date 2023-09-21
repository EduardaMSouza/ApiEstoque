const app = require('../app');
const bodyParser = require('body-parser');
const produtos = require('./produtoRoute');
const categorias = require('./categoriaRoute');
const historicoPrecos = require('./historicoPrecosRoute');
const historicoQuantidades = require('./historicoQuantidadesRoutes');
const usuarios = require('./usuariosRoute');
const auth = require('./authRoute')
const roles = require('./roleRoute')
const pedidos = require('./pedidosRoute');
const statusCarrinho = require('./statusCarrinhoRoute');
const permissoes = require('./permissaoRoute');
const seguranca = require('./segurancaRoute')
const autenticado = require('../middlewares/autenticado');
const carrinho = require('./carrinhoRoute')

//

module.exports = app => {
  app.use(bodyParser.json(),
  auth,
  autenticado,
  roles,
  produtos,
  categorias,
  historicoPrecos,
  historicoQuantidades,
  pedidos,
  statusCarrinho,
  permissoes,
  usuarios,
  seguranca,
  carrinho
  )
};
