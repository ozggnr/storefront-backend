import express, { Request, Response } from "express"
import { ProductDB, Product } from '../models/products-model'
import jwt from 'jsonwebtoken'

const products = new ProductDB()
const secret = process.env.TOKEN_SECRET || ''

//Connection to the model
const index = async (req: Request, res: Response) => {
    //This will call associated method in model
    const productList = await products.index()
    res.json(productList)
}
const show = async (req: Request, res: Response) => {
    const product = await products.show(req.params.id)
    res.json(product)
}
const create = async (req: Request, res: Response) => {
    const product: Product = {
        id: req.body.id as Number,
        name: req.body.name as string,
        price: req.body.price as Number
    }
    try {
        const newProduct = await products.create(product)
        const secret = process.env.TOKEN_SECRET || ''
        var token = jwt.sign({user: newProduct}, secret)
        res.json(token)
    } catch (error) {
        res.send('New product can not be added')

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
const productRoutes = (app: express.Application) => {
    app.get('/products', index)
    app.get('/products/:id', show)
    app.post('/products', verifyAuthToken, create)
}
export default productRoutes