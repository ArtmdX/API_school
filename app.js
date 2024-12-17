import dotenv from 'dotenv'

dotenv.config()

import './src/database'

import express from 'express'
import homeRoutes from './src/routes/home'
import userRoutes from './src/routes/user'
import tokenRoutes from './src/routes/token'

class App {
  constructor(){
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares(){
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }

  routes(){
    this.app.use('/', homeRoutes)
    this.app.use('/users/', userRoutes)
    this.app.use('/tokens/', tokenRoutes)
  }
}

export default new App().app;