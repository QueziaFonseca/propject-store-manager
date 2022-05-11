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

module.exports = {
  getAll,
};
