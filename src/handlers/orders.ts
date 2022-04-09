import express, { Request, Response } from "express"
import { OrderDB } from '../models/orders-model'
import jwt from 'jsonwebtoken'

const orders = new OrderDB()
const secret = process.env.TOKEN_SECRET || ''

const show = async (req: Request, res: Response) => {
    const order = await orders.show(req.params.userId)
    res.json(order)
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
const orderRoutes = (app: express.Application): void => {
    app.get('/orders/users/:userId/active', verifyAuthToken, show)
}
export default orderRoutes