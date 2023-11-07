const { Pool } = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'estoque_api',
    password: 'postgres',
    port: '5432'
});

const createTables = async() => {
    const productTable =
    'CREATE TABLE IF NOT EXISTS products(id SERIAL PRIMARY KEY, name TEXT, type TEXT, price NUMERIC(10,2), stock_location TEXT)';
    await pool.query(productTable);
};

module.exports = {
    pool,
    createTables
  };