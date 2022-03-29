import express, { Request, Response } from "express"
import { UserDB } from '../models/users-model'

const users = new UserDB()

const index = async (req: Request, res: Response) => {
    const userList = await users.index()
    res.json(userList)
}
const userRoutes = (app: express.Application) => {
    app.get('/users', index)
}
export default userRoutes