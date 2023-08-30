const request = require('supertest');
const app = require('../../src/app');


const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_NO_CONTENT = 204;
let novaCategoriaId;

describe('Teste de todos as funcionalidades CRUD da tabela categorias', () => {

describe('Deve cadastrar uma nova Categoria', () => {
  test('POST - /categorias - Deve retornar 200 e o objeto criado no BD', async () => {
    const body = {
      nome: 'TestePostCategoriasumDoisTresQuatroCincoSeisNove',
      descricao: 'teste numero Um'
    }
    const responseCategoria = await request(app).post('/categorias').send(body);
    expect(responseCategoria.statusCode).toBe(HTTP_STATUS_CREATED);
    expect(responseCategoria.body).toEqual({
      id: expect.any(Number), 
      nome: body.nome,
      descricao: body.descricao,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      deletedAt: null 
    });
    novaCategoriaId = responseCategoria.body.id;
  })
})

describe.each([
  ['nome', { nome: 'NomePutCategoriaAtualizacaoDoisTresQuatroCincSeteOito' }],
  ['descrição', { descricao: 'teste de atualizacao' }],
])('Teste de atualização de campos', (campo, atualizacao) => {
  test(`PUT - /categorias/:id - Deve atualizar ${campo}`, async () => {
    const responseCategoria = await request(app).put(`/categorias/${novaCategoriaId}`).send(atualizacao);
    expect(responseCategoria.statusCode).toBe(200);
  })
})


describe('Deve retornar as categorias pedidas', () => {
  test('GET - /categorias - Deve retornar 200 e um array', async () => {
    const responseCategoria = await request(app).get('/categorias');
    expect(responseCategoria.statusCode).toBe(200)
    expect(responseCategoria.body).toBeInstanceOf(Array);
  })
  test('GET - /categorias/:id - Deve retornar 200 e o objeto', async () => {
    const responseCategoria = await request(app).get(`/categorias/${novaCategoriaId}`);
    expect(responseCategoria.statusCode).toBe(200)
    expect(responseCategoria.body).toBeInstanceOf(Object);
  })
})

describe('Deve deletar uma Categoria', () => {
  test('DELETE - /categorias/:id - Deve retornar 204', async () => {
    const responseCategoria = await request(app).delete(`/categorias/${novaCategoriaId}`);
    expect(responseCategoria.statusCode).toBe(HTTP_STATUS_NO_CONTENT)
  })
})

describe('Deve restaurar Categoria', () => {
  test('POST - /categorias/:id - Deve retornar 200', async () => {
    const responseCategoria = await request(app).post(`/categorias/${novaCategoriaId}`);
    expect(responseCategoria.statusCode).toBe(200)
  })
})

describe('Deve retornar a Categoria recuperada', () => {
  test('GET - /categorias/:id - Deve retornar 200 e o objeto', async () => {
    const responseCategoria = await request(app).get(`/categorias/${novaCategoriaId}`);
    expect(responseCategoria.statusCode).toBe(200)
    expect(responseCategoria.body).toBeInstanceOf(Object);
  })
})

describe('Deve deletar uma Categoria', () => {
  test('DELETE - /categorias/:id - Deve retornar 204', async () => {
    const responseCategoria = await request(app).delete(`/categorias/${novaCategoriaId}`);
    expect(responseCategoria.statusCode).toBe(HTTP_STATUS_NO_CONTENT)
  })
})

})

