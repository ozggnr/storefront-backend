import express, { Request, Response } from "express"
import { ProductDB } from '../models/products-model'

const products = new ProductDB()

//Connection to the model
const index = async (req: Request, res: Response) => {
    //This will call associated method in model
    const productList = await products.index()
    res.json(productList)
}
const productRoutes = (app: express.Application) => {
    app.get('/products', index)
}
export default productRoutes