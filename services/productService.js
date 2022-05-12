const productModel = require('../models/productModel');

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

const getById = async (id) => {
  const products = await productModel.getById(id);
  
  return products;
};

const createProduct = async (name, quantity) => {
  const productName = await productModel.getByName(name);

  console.log('productService', productName);
  if (productName.length > 0) {
    throw new Error('Product already exists');
  }
  const newProduct = await productModel.createProduct(name, quantity);

  return newProduct;
};

module.exports = {
 getAll, 
 getById,
 createProduct,
};