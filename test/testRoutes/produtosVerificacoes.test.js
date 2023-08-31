const app = require('../../src/app');
const request = require('supertest');

const HTTP_STATUS_NAO_ENCONTRADO = 404;
const HTTP_STATUS_BAD_REQUEST = 400;
const idNaoExistente = 3000;

describe('Testes de validações na tabela "Produtos" ', () => {

  describe.each([
  ['minimo de letras','l'],
  ['maximo de letras', 'a'.repeat(41)],
  ['numeros' , '5s2'],
  ['espacamento','s ss'],
  ['vazio', ''],
  ['null', null],
  ['undefined', undefined]
])('Validacoes de nomes errados', (validacaoFeita, validacaoForcada) => {
  const body = {
    nome: validacaoForcada,
    preco: 10,
    categoria_nome: 'Roupas',
    quantidade_disponivel: 10
  }
  test(`POST - /produtos - Deve retornar HTTP 400 testando o ${validacaoFeita}`, async () => {
    const response = await request(app).post('/produtos').send(body);
    expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
  })

})
  describe.each([
    ['letras', 'p'],
    ['menor valor', 0.99],
    ['vazio', ''],
    ['null', null],
    ['undefined', undefined]
  ])('Validação preços', (validacaoFeita, validacaoForcada) => {
    const body = {
      nome: 'Roupas',
      preco: validacaoForcada,
      categoria_nome: 'Roupas',
      quantidade_disponivel: 10
    } 
    test(`POST - /produtos - Deve retornar HTTP 400 no teste de ${validacaoFeita}`, async () => {
      const response = await request(app).post('/produtos').send(body);
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
  })
  describe.each([
    ['letras', 'p'],
    ['numero decimal', 0.99],
    ['vazio', ''],
    ['null', null],
    ['undefined', undefined]
  ])('Validação quantidades', (validacaoFeita, validacaoForcada) => {
    const body = {
      nome: 'Roupas',
      preco: 10,
      categoria_nome: 'Roupas',
      quantidade_disponivel: validacaoForcada
    }
    test(`POST- /produtos - Deve retornar HTTP 400 no teste de ${validacaoFeita}`, async () => {
      const response = await request(app).post('/produtos');
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
    })
  describe('Teste categoria inexistente', () => {
    const body = {
      nome: 'Roupas',
      preco: 10,
      categoria_nome: 'TESTEINEXISTENTE',
      quantidade_disponivel: 10
    }
    test('POST - /produtos - Deve Deve retornar HTTP 400', async () => {
      const response = await request(app).post('/produtos');
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
  }
  )

  describe('Verificacoes de id nao encontrado', () => {
    test('GET - /produtos/:id - Deve retornar HTTP 400', async () => {
      const response = await request(app).get(`/produtos/${idNaoExistente}`);
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
    test('PUT - /produtos/:id - Deve retornar HTTP 400', async () => {
      const response = await request(app).put(`/produtos/${idNaoExistente}`).send({nome: 'NomeTesteDescricao'});
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
    test('DELETE - /produtos/:id - Deve retornar HTTP 400', async () => {
      const response = await request(app).delete(`/produtos/${idNaoExistente}`);
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
    test('POST - /produtos/:id - Deve retornar HTTP 400', async () => {
      const response = await request(app).post(`/produtos/${idNaoExistente}`);
      expect(response.statusCode).toBe(HTTP_STATUS_BAD_REQUEST);
    })
    
  })
});