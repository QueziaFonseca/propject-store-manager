const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');

describe('Busca todos os produtos no Banco de Dados', () => {
  describe('Quando não há nenhum produto criado', () => {
    const resultExecute = [[]];
    
    before(() => {
      sinon.stub(connection, 'execute')
        .resolves(resultExecute)
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna uma array', async () => {
      const result = await productModel.getAll();
      expect(result).to.be.an('array');
    })

    it('Retorna um array vazio', async () => {
      const result = await productModel.getAll();
      expect(result).to.be.empty;
    })
  })

  describe('Quando existem produtos cadastrados no banco de dados', () => {
    const resultExecute = [
      [
        {
          id: 1,
          name: 'Capa do batman',
          quantity: 2
        }
      ]
    ]

    before(() => {
      sinon.stub(connection, 'execute')
        .resolves(resultExecute)
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna um array', async () => {
      const result = await productModel.getAll();
      expect(result).to.be.an('array');
    })

    it('Retorna um array não vazio', async () => {
      const result = await productModel.getAll();
      expect(result).to.be.not.empty;
    })

    it('O array retornado possui objetos', async () => {
      const [result] = await productModel.getAll();
      expect(result).to.be.an('object');
    })

    it('O objeto que esta contido no array contem os atributos id, name e quantity', async () => {
      const [result] = await productModel.getAll();
      expect(result).to.be.includes.all.keys(
        'id',
        'name',
        'quantity'
      )
    })
  })
});

describe('Quando insere um novo produto no banco de dados', () => {
  const payloadProduct = {
    name: 'capa do batman',
    quantity: 8,
  };

  before( async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after( async () => {
    connection.execute.restore();
  });

  describe('Quando   um novo produto é inserido com sucesso', async () => {

    it('Retorna um objeto', async () => {
      const result = await productModel.createProduct(payloadProduct);
      expect(result).to.be.a('object');
    });
  
    it('O Objeto retornado possui o id do produto que foi inserido', async () => {
      const result = await productModel.createProduct(payloadProduct);
      expect(result).to.have.a.property('id');
    });
  })


});