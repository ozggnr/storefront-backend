import express, { Request, Response } from "express"
import { UserDB, User } from '../models/users-model'

const users = new UserDB()

const index = async (req: Request, res: Response) => {
    const userList = await users.index()
    res.json(userList)
}
const create = async (req: Request, res: Response) => {
    try {
        const user: User = {
            id: req.body.id as Number,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        }
        const newUser = await users.create(user)
        res.json(newUser)
    } catch (error) {
        res.send('New user can not be added')

    }
}
const userRoutes = (app: express.Application) => {
    app.get('/users', index)
    app.post('/users', create)
}
export default userRoutes