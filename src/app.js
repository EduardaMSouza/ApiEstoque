const express = require('express');
const routes = require('./Routes');
const manipuladorDeErros = require('./middlewares/manipuladorDeErros.js');
const manipulador404 = require('./middlewares/manipulador404');
const database = require('./models');
const { v4: UUIDV4 } = require('uuid');


async function syncDatabase() {
  await database.sequelize.sync({ force: true});

  await database.StatusCarrinho.create({
    id: UUIDV4(),
    nome: 'processando'
  })

}

// syncDatabase();

const app = express();
const port = 3000;

routes(app);

app.use(manipuladorDeErros);

app.use(manipulador404);

app.use('/', () => {
  console.log('Hello World');
})

app.listen(port, () => {
    console.log(`O servidor esta rodando em http://localhost:${port}/`);
  })


module.exports = app;