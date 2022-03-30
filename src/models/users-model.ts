import client from '../database'
import bcrypt from 'bcrypt'

export type User = {
    id: Number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
const pepper = process.env.BCRYPT_PASSWORD
const saltRounds = process.env.SALT_ROUNDS

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
    async create(user: User): Promise<User> {
        try {
            const connection = await client.connect()
            const query = 'INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4) RETURNING *'
            const hashedPassword = bcrypt.hashSync(user.password + pepper, Number(saltRounds))
            const result = await connection.query(query, [user.firstName, user.lastName, user.email, hashedPassword])
            connection.release()
            return result.rows[0]
        } catch(error) {
            throw new Error(`Cannot create new user ${error}`)
        }
    }
}