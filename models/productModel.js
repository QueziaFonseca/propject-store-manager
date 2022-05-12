const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';

  const [product] = await connection.execute(query);

  return product;
};

const getById = async (id) => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );

  return products;
};

const getByName = async (name) => {
  const query = 'SELECT * FROM products WHERE products.name = ?';
  const [products] = await connection.execute(query, [name]);

  return products;
};

const createProduct = async (name, quantity) => {
  const query = `
  INSERT INTO products (name, quantity)
  VALUES (?, ?)`;
  const [result] = await connection.execute(query, [name, quantity]);

  const newProduct = {
    id: result.insertId,
    name,
    quantity,
  };
  return newProduct;
};

module.exports = {
  getAll,
  getById,
  getByName,
  createProduct,
};
