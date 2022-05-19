const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    `SELECT sp.sale_id AS saleId, s.date AS date, sp.product_id AS productId , sp.quantity
    FROM StoreManager.sales_products AS sp 
    JOIN sales AS s ON s.id = sp.sale_id
    ORDER BY s.id, sp.product_id;
    `,
  );
  return sales;
};

const getById = async (id) => {
  const [sales] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId , sp.quantity
    FROM StoreManager.sales AS s
    JOIN StoreManager.sales_products AS sp ON s.id = sp.sale_id
    where id = ?;`, [id],
  );

  return sales;
};

const createSaleId = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
  const [result] = await connection.execute(query);
  return { id: result.insertId };
};

const createSales = async (id, productId, quantity) => {
  const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
  VALUES (?, ?, ?)`;
  await connection.execute(query, [id, productId, quantity]);
};

const updateSale = async (id, productId, quantity) => {
  const query = `UPDATE StoreManager.sales_products SET quantity = ? 
  WHERE sale_id = ? AND product_id = ?;`;
  await connection.execute(query, [quantity, id, productId]);
};

module.exports = {
  getAll,
  getById,
  createSaleId,
  createSales,
  updateSale,
};
