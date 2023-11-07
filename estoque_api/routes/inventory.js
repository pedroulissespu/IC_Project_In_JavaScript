const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Adição de Produto
router.post('/add', async (req, res) => {
  try {
    const product = await Product.add(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;