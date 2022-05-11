const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const products = await productService.getAll();

  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getById(id);
  if (product.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(product);
};

module.exports = {
  getAll,
  getById,
};