const productModel = require('../models/productModel');

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
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

const updateById = async (id, name, quantity) => {
  const idCheck = await productModel.getById(id);
  if (!idCheck.length) {
    throw new Error('Product not found');
  }
  const updatedProduct = productModel.updateById(id, name, quantity);
  
  return updatedProduct;
};

const deleteById = async (id) => {
  const idCheck = await productModel.getById(id);
  if (!idCheck.length) {
    throw new Error('Product not found');
  }
  const deletedProduct = await productModel.deleteById(id);
  return deletedProduct;
};

module.exports = {
 getAll, 
 getById,
 createProduct,
 updateById,
 deleteById,
};