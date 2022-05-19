const saleService = require('../services/saleService');

const getAll = async (_req, res) => {
  const sales = await saleService.getAll();

  return res.status(200).json(sales);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await saleService.getById(id);
    return res.status(200).json(sale);
    } catch (error) {
    return res.status(404).json({ message: error.message }); 
  }
};

const createSales = async (req, res) => {
  console.log('chamou controller');
  const soldItems = req.body; 
  const result = await saleService.createSales(soldItems); 
  return res.status(201).json(result);
};

const updateSale = async (req, res) => {
  const { id } = req.params; 
  const updatedItemArray = req.body; 
  const response = await saleService.updateSale(Number(id), updatedItemArray);
  return res.status(200).json(response);
};

module.exports = {
  getAll,
  getById,      
  createSales,
  updateSale,
};
