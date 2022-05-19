const saleModel = require('../models/saleModel');

const getAll = async () => {
  const sales = await saleModel.getAll();
  return sales;
};

const getById = async (id) => {
  const sale = await saleModel.getById(id);

  if (!sale || sale.length === 0) {
    throw new Error('Sale not found');
  }

  return sale;
};

// createSales recebe um array de objetos soldItems
const createSales = async (itemsSold) => {
  console.log('chamou service');
  const { id } = await saleModel.createSaleId();
  
  itemsSold.forEach(async (item) => {
    await saleModel.createSales(id, item.productId, item.quantity);
  });
  return { id, itemsSold };
};

// updatedItem é um array com objeto
const updateSale = async (id, updatedItemArray) => {
  const newArray = updatedItemArray.map(async (item) => {
    await saleModel.updateSale(id, item.productId, item.quantity); 
  });
  
  await Promise.all(newArray);
  
  return { saleId: id, updatedItemArray };
};

module.exports = {
  getAll,
  getById,
  createSales,
  updateSale,
};