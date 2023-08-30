const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app'); 
const { expect } = chai;

chai.use(chaiHttp);

const produtosTestes = () => {
  let novoProdutoId;


describe('Testes das Rotas de Produtos', () => {
  describe('GET /produtos', () => {
    it('Deve retornar a lista de produtos', (done) => {
      chai.request(app)
        .get('/produtos')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
});

it('GET /produtos/preco - Deve retornar produtos por preço', (done) => {
  const minimo = 10, maximo = 80;
  chai.request(app)
    .get(`/produtos/preco?minimo=${minimo}&maximo=${maximo}`)
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      done();
    });
});


it('/GET /produtos/busca - Deve retornar produtos por filtro de nome', (done) => {
  const nome = 'ele';
  chai.request(app)
    .get(`/produtos/busca?nome=${nome}`)
    .end((err, res) => {
      expect(res).to.have.status(200);;
      expect(res.body).to.be.an('array');
      done();
    })
})
it('Deve retornar um produto de id chamado', (done) => {
  const produtoId = 1;
  chai.request(app)
    .get(`/produtos/${produtoId}`)
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      done();
    });
});

it('Deve criar um produto e retornar ele como resposta', (done) => {
  const novoProduto = {
    "id": 200,
    "nome": "teste",
    "preco": 10,
    "quantidade": 10
  };
  chai.request(app)
    .post(`/produtos`)
    .send(novoProduto)
    .end((err, res) => {
      expect(res).to.have.status(201); 
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('id');
      expect(res.body.nome).to.equal(novoProduto.nome);
      expect(res.body.preco).to.equal(novoProduto.preco);
      createdProductId = res.body.id;
    done();
  });
})

it('Deve apagar um produto e retornar ele como resposta', (done) => {
chai.request(app)
  .delete(`/produtos/${novoProdutoId}`)
  .end((err, res) => {
  expect(res).to.have.status(200)
  expect(res.body).to.be.an('object');
  done();
  })
})

it('Deve restaurar o produto escolhido', (done) => {
  chai.request(app)
    .post(`/produtos/${novoProdutoId}`)
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.be.equal(`Produto de id ${novoProdutoId} recuperada`)
      done();
    })
})


it(('Deve atualizar o produto escolhido'), (done) => {
  chai.request(app)
    .put(`/produtos/${novoProdutoId}`)
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.be.equal(`Produto de id ${novoProdutoId} atualizado`)
    })
})

};
module.exports = produtosTestes;












'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produtos.belongsTo(models.Categorias, {
        foreignKey: 'categoria_nome'
      })
      Produtos.hasMany(models.HistoricoPrecos, {
        foreignKey: 'produto_id'
      })
      Produtos.hasMany(models.HistoricoQuantidades, {
        foreignKey: 'produto_id'
      })
    }
  }
  Produtos.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'O campo nome deve estar preenchido!'},
        isAlpha: {msg: 'O campo nome só aceita letras!'},
        len: {
          args: [2, 40],
          msg: 'O campo nome deve ter no mínimo 2 caracteres e no máximo 40'
        }
      }
    },

    preco: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      validate: {
      notNull: {msg: 'O campo preço deve estar preenchido!'},
      isNumeric: {msg: 'O campo preço deve ser preenchido apenas de números!'},
      min: {
        args: 1,
        msg: 'O campo preço deve ser no mínimo 1 real!'
      },
      max: {
        args: 1_000_000,
        msg: 'O campo preço deve ser no máximo 1_000_000 reais!'
      }}
    },
    quantidade_disponivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      notNull: {msg: 'O campo quantidade deve estar preenchido!'}
    },
  }, {
    paranoid: true,
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};




const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app'); 
const { expect } = chai;

chai.use(chaiHttp);

const categoriasTestes = () => {
  describe('Testes das Rotas de categoria', () => {
    describe('GET /categorias', () => {
      it('Deve retornar a lista de categorias', (done) => {
        chai.request(app)
          .get('/categorias')
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();
          });
      });
    });
  });
  describe('Testes das Rotas de categoria', () => {
    describe(`GET /categorias/:id`, () => {
      it('Deve retornar uma categoria de id chamado', (done) => {
        const categoriaId = 1;
        chai.request(app)
          .get(`/categorias/${categoriaId}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();
          });
      });
    });
  });



  }
  
  module.exports = categoriasTestes;

