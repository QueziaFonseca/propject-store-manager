const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/saleModel');

describe('Busca todas as vendas no  banco de dados', () => {
  describe('Quando não há nenhuma venda criada', () => {
    const resultExecute = [[]];

    before(() => {
      sinon.stub(connection, 'execute').resolves(resultExecute);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const result = await salesModel.getAll();
      expect(result).to.be.an('array');
    });

    it('O arrai retornado está vazio', async () => {
      const result = await salesModel.getAll();
      expect(result).to.be.empty;
    });
  });
});