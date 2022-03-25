import client from '../database'

export type Product = {
    id: Number;
    name: string;
    price: Number
}

export class ProductDB {
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
}