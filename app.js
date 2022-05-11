const express = require('express');
const productController = require('./controllers/productController ');
const saleController = require('./controllers/saleController');

const app = express();

app.get('/products/:id', productController.getById);
app.get('/products', productController.getAll);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/sales/:id', saleController.getById);
app.get('/sales', saleController.getAll);

app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
