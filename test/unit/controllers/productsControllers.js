const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../../services/productService');
const productsController = require('../../../controllers/productController ');

describe('A função getAll é chamada no controller ', () => {
  describe('Quando existem filmes no banco de dados', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getAll').resolves([]);
    })

    after(() => {
      productsService.getAll.restore();
    })

    it('É rertornado um status de 200', async () => {
      await productsController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    })

    it('É retornado o método json contendo um array', async () => {
      await productsController.getAll(req, res);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);

    })

  })

  describe('Quando existem filmes no banco de dados', () => {
    const req = {};
    const res = {};

    before(() => {
      req.body = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getAll').resolves([]);
    })

    after(() => {
     productsService.getAll.restore();
    })


    it('O status é chamado com o código 200', async () => {
      await productsController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    })

    it('O json é chamado com um array', async () => {
      await productsController.getAll(req, res);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);

    })
  })
});

describe('A função referente a criação de produtos é chamada na camada controler', () => {
  describe('Quando o payload tem formato invalido', async () => {
    const req = {};
    const res = {};

    before(() => {
      req.body = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      res.end = sinon.stub().returns();
      
      sinon.stub(productsService, 'createProduct').resolves(false);
    });

    after(() => {
      productsService.createProduct.restore();
    });

    it('O status é chamado  com o código 409', async () => {
      await productsController.createProduct(req, res);
      expect(res.status.calledWith(409)).to.be.equal(false);
    });

    it('".end" finaliza as requisições ', async () => {
      await productsController.deleteById(req, res);
      expect(res.end.calledWith()).to.be.equal(false);
    });
  });
});