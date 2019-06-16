import { Request, Response } from 'express'
import PostController from './controller'

// Class with methods for answering route calls

class PostRoutes {
  constructor () {}

  create (req: Request, res: Response) {
    return PostController.createPost(req, res)
  }

  index (req: Request, res: Response) {
    return PostController.getAll(req, res)
  }

  like (req: Request, res: Response) {
    return PostController.addLike(req, res)
  }
}

export default new PostRoutes()
