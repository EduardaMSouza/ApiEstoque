const express = require('express');
const routes = require('./Routes');
const manipuladorDeErros = require('./middlewares/manipuladorDeErros.js');
const manipulador404 = require('./middlewares/manipulador404');

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