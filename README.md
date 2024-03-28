<h1>API REST To-Do List</h1>

<p>Este projeto é uma API REST para gerenciamento de uma lista de tarefas, desenvolvida em Node.js e Express.js. Ele fornece endpoints para criação, atualização, exclusão e consulta de tarefas.</p>

<h2>Instalação</h2>

<ol>
  <li>Clone este repositório em sua máquina local:</li>
  <pre><code>git clone &lt;URL do repositório&gt;</code></pre>

  <li>Navegue até o diretório do projeto:</li>
  <pre><code>cd &lt;diretório do projeto&gt;</code></pre>

  <li>Instale as dependências do projeto:</li>
  <pre><code>npm install</code></pre>
</ol>

<h2>Execução</h2>

<p>Para iniciar o servidor em modo de desenvolvimento, utilize o seguinte comando:</p>

<pre><code>npm run dev</code></pre>

<h2>Testes</h2>

<p>Para executar os testes, utilize o seguinte comando:</p>

<pre><code>npm test</code></pre>

<h2>Rotas</h2>

<ul>
  <li><strong>GET /tarefas:</strong> Retorna todas as tarefas cadastradas.</li>

  <li><strong>POST /tarefas:</strong> Cria uma nova tarefa.</li>

  <li><strong>GET /tarefas/:id:</strong> Retorna informações sobre uma tarefa específica com base no ID.</li>

  <li><strong>PUT /tarefas/:id:</strong> Atualiza as informações de uma tarefa existente com base no ID.</li>

  <li><strong>DELETE /tarefas/:id:</strong> Exclui uma tarefa com base no ID.</li>
</ul>

<h2>Utilização</h2>

<p>Você pode acessar essas rotas utilizando ferramentas como Postman ou através de chamadas HTTP diretamente.</p>

<h2>Tecnologias Utilizadas</h2>

<ul>
  <li>Node.js: Ambiente de execução JavaScript.</li>
  <li>Express.js: Framework web para Node.js.</li>
  <li>bcryptjs: Biblioteca para criptografia de senhas.</li>
  <li>body-parser: Middleware para analisar corpos de requisições em formato JSON.</li>
  <li>jsonwebtoken: Implementação de JSON Web Tokens para autenticação.</li>
  <li>moment: Biblioteca para manipulação de datas e horas.</li>
  <li>nodemon: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.</li>
  <li>pg: Driver PostgreSQL para Node.js.</li>
  <li>pg-hstore: Serializador/desserializador para dados JSON e hstore.</li>
  <li>redis: Cliente Redis para Node.js.</li>
  <li>sequelize: ORM para Node.js.</li>
  <li>sequelize-paginate: Plugin para paginação de resultados no Sequelize.</li>
  <li>uuid: Biblioteca para geração de identificadores únicos.</li>
  <li>chai: Biblioteca de asserção para testes.</li>
  <li>jest: Framework de teste para JavaScript.</li>
  <li>mocha: Framework de teste para Node.js.</li>
  <li>sequelize-cli: Interface de linha de comando para Sequelize.</li>
  <li>supertest: Biblioteca para testes de integração HTTP.</li>
</ul>
