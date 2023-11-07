const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Adição de Produto
router.post('/add', async (req, res) => {
  try {
    const product = await Product.add(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Remoção de produtos
router.post('/remove', async (req, res) => {
  try {
    const product = await Product.remove(req.body);
    res.status (201).json(product);
  } catch (error) {
    res.status (400).send(error.message);
  }
});

// Procurar produto pelo nome ou tipo
router.post('/search', async (req, res) => {
  try {
    const product = await Product.search(req.body);
    res.status (201).json(product);
  } catch (error) {
    res.status (400).send(error.message);
  }
});

// Listar produtos em ordem alfabética
router.post('/sort', async (req, res) => {
  try{
    const product = await Product.sort(req.body);
    res.status (201).json(product);
  } catch (error) {
    res.status (400).send(error.message);
  }
});

module.exports = router;