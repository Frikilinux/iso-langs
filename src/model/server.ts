import express, { Express } from 'express'
import langsRoutes from '../routes/langs'
// import spentsRoutes from '../routes/spents'

export class Server {
  port: string | number | undefined
  app: Express

  constructor() {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.middlewares()
    this.routes()
  }

  middlewares = () => {
    this.app.use(express.json())
  }

  listen = () => {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }

  routes = () => {
    this.app.use('/langs', langsRoutes)
    // this.app.use('/spents', spentsRoutes)
  }
}
