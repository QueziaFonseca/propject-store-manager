const saleModel = require('../models/saleModel');

const getAll = async () => {
  const sales = await saleModel.getAll();
  return sales;
};

const getById = async (id) => {
  const sales = await saleModel.getById(id);
  return sales;
};

module.exports = {
  getAll,
  getById,
};