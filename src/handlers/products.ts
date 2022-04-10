import express, { Request, Response } from "express"
import { ProductDB, Product } from '../models/products-model'
import jwt from 'jsonwebtoken'

const products = new ProductDB()
const secret = process.env.TOKEN_SECRET || ''

//Connection to the model
const index = async (req: Request, res: Response) => {
    //This will call associated method in model
    try {
        const productList = await products.index()
        res.json(productList)
    } catch (error) {
        res.send(`Cannot display products! Error is: ${error}`)
    }
}
const show = async (req: Request, res: Response) => {
    try {
        const product = await products.show(req.params.id)
        res.json(product)
    } catch (error) {
        res.send(`Cannot display the product! Error is: ${error}`)
    }
}
const create = async (req: Request, res: Response) => {
    const product: Product = {
        name: req.body.name as string,
        price: req.body.price as Number
    }
    try {
        const newProduct = await products.create(product)
        res.json(newProduct)
    } catch (error) {
        res.send(`New product can not be added! Error is: {error}`)
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
const productRoutes = (app: express.Application): void => {
    app.get('/products', index)
    app.get('/products/:id', show)
    app.post('/products', verifyAuthToken, create)
}
export default productRoutes