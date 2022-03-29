import express, { Request, Response } from "express"
import { ProductDB } from '../models/products-model'

const products = new ProductDB()

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
const productRoutes = (app: express.Application) => {
    app.get('/products', index)
    app.get('/products/:id', show)
}
export default productRoutes