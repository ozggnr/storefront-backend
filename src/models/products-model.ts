import client from '../database'
import bcrypt from 'bcrypt'
export type Product = {
    id?: Number;
    name: string;
    price: Number
}

export class ProductDB {
    //get all products list
    async index(): Promise<Product[]> {
        try {
            //connection created
            const connection = await client.connect()
            const query = 'SELECT * FROM products'
            const result = await connection.query(query)
            //connection closed
            connection.release()
            return result.rows
        } catch(error) {
            throw new Error(`Ups! There is something wrong ${error}`)
        }
    }
    //get specific product with given id
    async show(id: string): Promise<Product> {
        try {
            const connection = await client.connect()
            const query = 'SELECT * FROM products WHERE id = ($1);'
            const result = await connection.query(query, [id])
            connection.release()
            return result.rows[0]
        } catch(error) {
            throw new Error(`Cannot display this product ${error}`)
        }
    }
    //create new product
    async create(product: Product): Promise<Product> {
        try {
            const connection = await client.connect()
            const query = 'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *'        
            const result = await connection.query(query, [product.name, product.price])
            const newProduct = {
                id: result.rows[0].id,
                name: result.rows[0].name,
                price: Number(result.rows[0].price)
            }
            connection.release()
            return newProduct
        } catch(error) {
            throw new Error(`Cannot display this product ${error}`)
        }
    }
}