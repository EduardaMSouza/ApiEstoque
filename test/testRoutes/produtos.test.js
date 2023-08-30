const request = require('supertest');
const app = require('../../src/app');


const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_NO_CONTENT = 204;
let novaProdutoId;
const body = {
  nome: 'TestePostProdutos',
  categoria_nome: 'Roupas',
  preco: 20.10,
  quantidade_disponivel: 10
}

describe('Teste de todos as funcionalidades CRUD da tabela produtos', () => {

describe('Deve cadastrar uma nova Produto', () => {
  
  test('POST - /produtos - Deve retornar 200 e o objeto criado no BD', async () => {
    
    const responseProduto = await request(app).post('/produtos').send(body);
    expect(responseProduto.statusCode).toBe(HTTP_STATUS_CREATED);
    expect(responseProduto.body).toEqual({
      id: expect.any(Number), 
      nome: body.nome,
      categoria_nome: body.categoria_nome,
      preco: body.preco,
      quantidade_disponivel: body.quantidade_disponivel,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      deletedAt: null 
    });
    novaProdutoId = responseProduto.body.id;
  })
})


describe.each([
  ['nome', { nome: 'NomePutProduto' }],
  ['preco', { preco: 60 }],
  ['quantidade disponivel', { quantidade_disponivel: 90}],
  ['categoria', { categoria_nome: 'Jardinagem' }]
])('Teste de atualização de campos', (campo, atualizacao) => {
  test(`PUT - /produtos/:id - Deve atualizar ${campo}`, async () => {
    const responseProduto = await request(app).put(`/produtos/${novaProdutoId}`).send(atualizacao);
    expect(responseProduto.statusCode).toBe(200);
  })
})

describe('Deve retornar as produtos pedidas', () => {
  test('GET - /produtos - Deve retornar 200 e um array', async () => {
    const responseProduto = await request(app).get('/produtos');
    expect(responseProduto.statusCode).toBe(200)
    expect(responseProduto.body).toBeInstanceOf(Array);
  })
  test('GET - /produtos/:id - Deve retornar 200 e o objeto', async () => {
    const responseProduto = await request(app).get(`/produtos/${novaProdutoId}`);
    expect(responseProduto.statusCode).toBe(200)
    expect(responseProduto.body).toBeInstanceOf(Object);
  })
})

describe('Deve deletar uma Produto', () => {
  test('DELETE - /produtos/:id - Deve retornar 204', async () => {
    const responseProduto = await request(app).delete(`/produtos/${novaProdutoId}`);
    expect(responseProduto.statusCode).toBe(HTTP_STATUS_NO_CONTENT)
  })
})

describe('Deve restaurar Produto', () => {
  test('POST - /produtos/:id - Deve retornar 200', async () => {
    const responseProduto = await request(app).post(`/produtos/${novaProdutoId}`);
    expect(responseProduto.statusCode).toBe(200)
  })
})

describe('Deve retornar a Produto recuperada', () => {
  test('GET - /produtos/:id - Deve retornar 200 e o objeto', async () => {
    const responseProduto = await request(app).get(`/produtos/${novaProdutoId}`);
    expect(responseProduto.statusCode).toBe(200)
    expect(responseProduto.body).toBeInstanceOf(Object);
  })
})

describe('Deve deletar uma Produto', () => {
  test('DELETE - /produtos/:id - Deve retornar 204', async () => {
    const responseProduto = await request(app).delete(`/produtos/${novaProdutoId}`);
    expect(responseProduto.statusCode).toBe(HTTP_STATUS_NO_CONTENT)
  })
})


})

