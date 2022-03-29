import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import productRoutes from './handlers/products'
import userRoutes from "./handlers/users"

const app: express.Application = express()
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello!')
})

productRoutes(app)
userRoutes(app)

app.listen(3000, () => console.log('app is ready:)'))