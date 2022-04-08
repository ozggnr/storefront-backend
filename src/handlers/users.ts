import express, { Request, Response } from "express"
import { UserDB, User } from '../models/users-model'
import jwt from 'jsonwebtoken'

const users = new UserDB()
const secret = process.env.TOKEN_SECRET || ''

const index = async (req: Request, res: Response) => {
    const userList = await users.index()
    res.json(userList)
}
const show = async (req: Request, res: Response) => {
    const user = await users.show(req.params.id)
    res.json(user)
}
const create = async (req: Request, res: Response) => {
    const user: User = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    }
    try {
        const newUser = await users.create(user)
        res.json(newUser)
    } catch (error) {
        res.status(400)
        res.send(`New user can not be added ${error}`)
    }
}
//To check if user give the correct credentials
const auth = async (req: Request, res: Response) => {
    const user: User = {
        id: req.body.id as Number,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    }
    try {
        //Send the credentials to the model to check credentials if everything is ok user will return
        const authUser = await users.auth(user.email, user.password)
        //Create new token for the user and send it to the client
        var token = jwt.sign({user: authUser}, secret)
        res.json(token)
    } catch (error) {
        res.status(401)
        res.send(`New user can not be added ${error}`)
    }
}
const verifyAuthToken = async (req: Request, res: Response, next: Function) => {
    try {
        const authHeader = req.headers.authorization || ''
        const token = authHeader.split(' ')[1]
        jwt.verify(token, secret)
        next()
    } catch (error) {
        res.status(401)
        res.send(`Invalid token`)
    }
}
const userRoutes = (app: express.Application) => {
    app.get('/users', verifyAuthToken, index)
    app.get('/users/:id', verifyAuthToken, show)
    app.post('/users', create)
    app.post('/users/auth', auth)
}
export default userRoutes