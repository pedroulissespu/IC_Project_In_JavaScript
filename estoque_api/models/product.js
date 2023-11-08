const {pool} = require ('../db');

class Product {
    // Adicionar produto
    static async add({ name, type, price, stock_location }) {
        const queryText = 'INSERT INTO products(name, type, price, stock_location) VALUES($1, $2, $3, $4) RETURNING *';
        const values = [name, type, price, stock_location];
    
        const result = await pool.query(queryText, values);
        return result.rows[0];
      }

    // Remover produto  
    static async remove({id}){
        const result = await pool.query ('DELETE FROM products WHERE id = $1 RETURNING *' [id]);
        return result.rows[0];
    }

    // Procurar produto pelo nome ou tipo
    static async findByNameOrType ({name, type}){
        const result =await pool.query('SELECT * FROM products WHERE name = $1 OR type = $2' [name, type]);
        return result.rows;
    }

    // Listar produtos em ordem alfabética
    static async list({orderBy= 'name', groupBy}){
        let query = 'SELECT * FROM products';
        if(groupBy) query += ` GROUP BY ${groupBy}`;
        query += `ORDER BY ${orderBy}`;
        const result = await pool.query(query);
        return result.rows;
    }
}

module.exports = Product;