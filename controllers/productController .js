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
  return res.status(200).json(product[0]);
};

const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;  
    // const name = +req.body.name;
    // const quantity = +req.body.name;
  
  const product = await productService.createProduct(name, quantity);
  return res.status(201).json(product);
  // console.log('product at controller', product);
  } catch (error) {
    return res.status(409).json({ message: error.message });
    // console.log('controller error', error.message);
  }
};

module.exports = {
  getAll,
  getById,
  createProduct,
};