import client from '../database'

export type Product = {
    id: Number;
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
}