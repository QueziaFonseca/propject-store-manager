const saleService = require('../services/saleService');

const getAll = async (_req, res) => {
  const sales = await saleService.getAll();

  return res.status(200).json(sales);
};

module.exports = {
  getAll,
};