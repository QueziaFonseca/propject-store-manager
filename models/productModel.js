const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';

  const [product] = await connection.execute(query);

  return product;
};

const getById = async (id) => {
  console.log('entrou em getById');
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

const updateById = async (id, name, quantity) => {
  const query = 'UPDATE products SET name=?, quantity=? WHERE id=?';
  const [product] = await connection.execute(query, [name, quantity, id]);
  console.log('model - product', product);
  const edittedProduct = {
    id,
    name,
    quantity: Number(quantity),
  };
  return edittedProduct;
};

const deleteById = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  await connection.execute(query, [id]);
};

module.exports = {
  getAll,
  getById,
  getByName,
  createProduct,
  updateById,
  deleteById,
};
