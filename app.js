const express = require('express');
const productController = require('./controllers/productController ');
const saleController = require('./controllers/saleController');
// const productValidation = require('./middlewares/productValidation');

const app = express();
app.use(express.json());

app.get('/products', productController.getAll);
app.post('/products', productController.createProduct);
app.get('/products/:id', productController.getById);

app.get('/sales', saleController.getAll);
app.get('/sales/:id', saleController.getById);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
