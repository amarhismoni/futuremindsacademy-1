const express = require('express');
const db = require('./db.js');
const app = express();
app.use(express.json());

app.get('/products', (req, res)=>{
    res.json(db.products)
})

app.listen(8585);