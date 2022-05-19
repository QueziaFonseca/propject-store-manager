const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../models/productModel');
const productsService = require('../../../services/productService');

describe('Busca os no banco de dados com a função getAll', () => {
  describe('Quando não há nenhum produto criado', () => {
    before(() => {
      sinon.stub(productsModel, 'getAll')
        .resolves([]);
    });

    after(() => {
      productsModel.getAll.restore();
    });
    it('Retorna uma array', async () => {
      const result = await productsModel.getAll()
      expect(result).to.be.an('array');
    })

    it('O array retornado está vazio', async () => {
      const result = await productsModel.getAll()
      expect(result).to.be.empty;
    })
  })

  describe('Quando existem produtos cadastrados no banco de dados', () => {
    before(() => {
      sinon.stub(productsModel, 'getAll')
        .resolves([
          {
            id: 2,
            name: 'capa do batman',
            quantity: 2
          }
        ]);
    });

    after(() => {
      productsModel.getAll.restore();
    });

    it('Retorna um array', async () => {
      const result = await productsModel.getAll()
      expect(result).to.be.an('array');
    })

    it('O array retornado não está vazio', async () => {
      const result = await productsModel.getAll()
      expect(result).to.be.not.empty;
    })

    it('O array retornado possui objetos', async () => {
      const [result] = await productsModel.getAll()
      expect(result).to.be.an('object');
    })

    it('O objeto contido no array possui as propriedades id, name e quantity', async () => {
      const [result] = await productsService.getAll();
      expect(result).to.be.includes.all.keys(
        'id',
        'name',
        'quantity'
      )
    })
  })
});

describe('Quando um produto novo é inserido no banco de dados', () => {
  describe('Quando o payload informado é inválido', async () => {
    const payloadProduct = [];
    before(() => {
      sinon.stub(productsModel, 'getByName').resolves(payloadProduct);
      sinon.stub(productsModel, 'createProduct').resolves();
    });

    after(() => {
      productsModel.getByName.restore();
      productsModel.createProduct.restore();
    });

    it('Retorna uma mensagem de erro', async () => {
      try {
        await productsService.createProduct(payloadProduct);

      } catch (error) {
        expect(error.message).to.be.equal('Product already exists');

      }
    });
  });

  
});