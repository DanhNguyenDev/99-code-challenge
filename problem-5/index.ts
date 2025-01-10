import 'reflect-metadata'
import express, { Express, Request, Response, Application } from 'express'
import dotenv from 'dotenv'
import router from './routes/index.route'
import helmet from 'helmet'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(helmet())
app.use('/api', router)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})
