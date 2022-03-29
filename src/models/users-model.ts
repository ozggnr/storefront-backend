import client from '../database'

export type User = {
    id: Number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class UserDB {
    async index(): Promise<User[]> {
        try {
            const connection = await client.connect()
            const query = 'SELECT * FROM users'
            const result = await connection.query(query)
            connection.release()
            return result.rows
        } catch(error) {
            throw new Error(`Ups! There is something wrong ${error}`)
        }
    }
}