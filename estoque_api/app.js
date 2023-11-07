const express = require('express');
const bodyParser = require('body-parser');
const { pool, createTables } = require('./db'); // Adjusted require statement
const inventoryRoutes = require('./routes/inventory');

const app = express();

app.use(bodyParser.json());
app.use('/api/inventory', inventoryRoutes);

// Initialize the database and create the tables when the server starts
createTables().then(() => { // Adjusted function call
  console.log('Tabelas criadas!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});