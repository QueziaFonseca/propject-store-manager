const { expect } = require('chai');
const sinon = require('sinon');

const salesService= require('../../../services/saleService');
const salesController= require('../../../controllers/saleController');

describe('A função getAll é chamada no controler', () => {
  describe('Quando não existem vendas cadastradas no banco', () => {
    const res = {};
    const req = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getAll').resolves([]);
    });

    after(() => {
      salesService.getAll.restore();
    });
  
    it('O status é chamado com o código 200', async () => {
      await salesController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  
    it('O json é chamado com um array', async () => {
      await salesController.getAll(req, res);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

});