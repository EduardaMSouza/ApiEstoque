const app = require('../../src/app');
const request = require('supertest');

const HTTP_STATUS_NAO_ENCONTRADO = 404;
const HTTP_STATUS_BAD_REQUEST = 400;
const idNaoExistente = 3000;

describe('Testes de validações na tabela "Categorias"', () => {

  describe.each([
    ['minimo de letras','lx'],
    ['maximo de letras', 'a'.repeat(71)],
    ['numeros' , '5s2'],
    ['espacamento','s ss'],
    ['vazio', ''],
    ['null', null],
    ['undefined', undefined],
    ['apenas espacos', '   '],
    ['caracteres especiais', 'jsakh#']
  ])('Validacoes de nomes errados', (validacaoFeita, validacaoForcada) => {
    const body = {
      nome: validacaoForcada,
      descricao: 'Descricao de teste'
    }
    test(`POST - /categorias - Nome com ${validacaoFeita}`, async () => {
      const response = await request(app).post('/categorias').send(body);
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
  })
  describe.each([
    ['minimo de letras','Teste'],
    ['maximo de letras', 'a'.repeat(201)]
  ])('Validacao de descrição erradas', (validacaoFeita, validacaoForcada) => {
    const body = {
      nome: 'NomeTesteDescricao',
      descricao: validacaoForcada
    }
    test(`POST - /categorias - Deve retornar HTTP 400 testando o ${validacaoFeita}`, async () => {
      const response = await request(app).post('/categorias').send(body);
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
  })
  describe('Verificacoes de id nao encontrado', () => {
    test('GET - /categorias/:id - Deve retornar HTTP 400', async () => {
      const response = await request(app).get(`/categorias/${idNaoExistente}`);
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
    test('PUT - /categorias/:id - Deve retornar HTTP 400', async () => {
      const response = await request(app).put(`/categorias/${idNaoExistente}`).send({nome: 'NomeTesteDescricao'});
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
    test('DELETE - /categorias/:id - Deve retornar HTTP 400', async () => {
      const response = await request(app).delete(`/categorias/${idNaoExistente}`);
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
    test('POST - /categorias/:id - Deve retornar HTTP 400', async () => {
      const response = await request(app).post(`/categorias/${idNaoExistente}`);
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
    
  })
})

describe('Teste de página não encontrada', () => {
  test('GET - /categoria - Deve retornar HTTP 404', async () => {
    const response = await request(app).get('/categoria');
    expect(response.statusCode).toBe(HTTP_STATUS_NAO_ENCONTRADO);
  })
})