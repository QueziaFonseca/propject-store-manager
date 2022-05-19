const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../models/saleModel');
const salesService = require('../../../services/saleService');

describe('Busca as vendas no banco de dados com a função getAll', () => {
  describe('Quando não existe nenhuma venda criada', () => {
    before(() => {
      sinon.stub(salesModel, 'getAll').resolves([]);
    });

    after(() => {
      salesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const result = await salesService.getAll();
      expect(result).to.be.an('array');
    })
  });
});
