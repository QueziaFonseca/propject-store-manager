const saleModel = require('../models/saleModel');

const getAll = async () => {
  const sales = await saleModel.getAll();
  return sales;
};

module.exports = {
  getAll,
};