import { Request, Response } from 'express'
import * as _ from 'lodash'
import Handlers from '../../api/resposeHandlers'
import Post from './service'

// the controler class is used to make the connection between the UserRouter class and the Service class
// And returns the result of the promisses of the service class methods.

class PostController {
  constructor () {};

  getAll (req: Request, res: Response) {
    Post
      .getAll()
      .then(_.partial(Handlers.onSucess, res))
      .catch(_.partial(Handlers.onError, res, 'Error get all post'))
  }

  createPost (req: Request, res: Response) {
    Post
      .create(req.body, req.file)
      .then(_.partial(Handlers.onSucess, res))
      .catch(_.partial(Handlers.dbErrorHandler, res))
      .catch(_.partial(Handlers.onError, res, 'Error create new post'))
  }

  addLike (req: Request, res: Response) {
    Post
      .addLike(req.params.id)
      .then(_.partial(Handlers.onSucess, res))
      .catch(_.partial(Handlers.dbErrorHandler, res))
      .catch(_.partial(Handlers.onError, res, 'Error create new post'))
  }
}

export default new PostController()
