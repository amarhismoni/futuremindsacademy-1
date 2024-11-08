const express = require('express');
const productController = require('./controller/productController')
const app = express();

app.use('/product', productController)

app.listen(8585)