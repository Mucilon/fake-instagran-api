'use strict'

import express, { Application } from 'express'

import morgan from 'morgan'
import * as bodyParser from 'body-parser'
import Routes from './routes'
import Handlers from './resposeHandlers'
import path from 'path'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'
import { createSchema } from '../graphql/createSchema'
// class responsible for setting up and starting routes the API

class Api {
    public express: Application;

    constructor () {
      this.express = express()
      this.middleware()
    }

    async middleware () {
      this.express.use(morgan('dev'))
      this.express.use(cors())
      this.express.use(bodyParser.urlencoded({ extended: true }))
      this.express.use(bodyParser.json())
      this.express.use(Handlers.errorHandlerApi)
      this.express.use('/files', express.static(path.resolve(__dirname, '..', '..', 'uploads', 'resized')))
      const schema = await createSchema()
      this.express.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
      }))
      this.router(this.express)
    }

    private router (app: Application): void{
      Routes.initRoutes(app)
    }
}

export default new Api().express
