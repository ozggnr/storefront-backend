import express, { Request, Response } from "express"
import bodyParser from "body-parser"

const app: express.Application = express()
const address: string = '0.0.0.0:5000'
app.use(bodyParser.json)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello!')
})
app.listen(5000, () => console.log('app is ready:)'))