import client from '../database'

export type Order = {
    id: Number;
    userId: Number;
    statusOfOrder: string
}

export class OrderDB {
    //Display Current orders by user
    async show(userId: string): Promise<Order> {
        try {
            const connection = await client.connect()
            const query = "SELECT * FROM orders WHERE userId = ($1) and statusOfOrder = 'Active'"
            const result = await connection.query(query, [userId])
            connection.release()
            return result.rows[0]
        } catch(error) {
            throw new Error(`Cannot find the order belongs to this userId ${userId} ${error}`)
        }
    }
}