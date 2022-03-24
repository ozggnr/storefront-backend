import dotenv from 'dotenv'
import { Pool } from 'pg'

//loads .env file contents into process.env
dotenv.config()

const {
    POSTGRES_HOST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB
} = process.env

//connection to database
const client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_USER,
    user: POSTGRES_PASSWORD,
    password: POSTGRES_DB
})
export default client