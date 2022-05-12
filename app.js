const express = require('express');
const res = require('express/lib/response');
const productController = require('./controllers/productController ');
const saleController = require('./controllers/saleController');
const productValidation = require('./middlewares/productValidation');
const saleValidation = require('./middlewares/saleValidation');

const app = express();
app.use(express.json());
// app.use('./products');
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productController.getAll);
app.post('/products', productValidation, productController.createProduct);
app.get('/products/:id', productController.getById);

app.get('/sales', saleController.getAll);
app.get('/sales/:id', saleController.getById);
app.post('/sales', saleValidation);

app.put('/products/:id', productController.updateById);
app.delete('/products/:id', productController.deleteById);
app.use((err, _req, _res, _next) => {
  if (err) return res.status(500).json({ message: err.message });
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
