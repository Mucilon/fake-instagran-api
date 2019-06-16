'use strict'

import { Application } from 'express'
import PostRoutes from '../modules/post/routes'
import multer from 'multer'
import uploadConfig = require('../config/multer/upload')

// Class responsible for starting the API routes, request authentication
// and call the modules responsible for executing the route

class Routes {
    public upload:any = multer(uploadConfig);

    constructor () {}

    initRoutes (app: Application): void{
      app.route('/api/post/create').all(this.upload.single('image')).post(PostRoutes.create)
      app.route('/api/post/all').get(PostRoutes.index)
      app.route('/api/post/:id/like').post(PostRoutes.like)
    }
}

export default new Routes()
