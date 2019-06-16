import { IPost, createPost, createPosts, createPostById } from './interface'
import modelPost from '../../models/post'
import sharp from 'sharp'
import path from 'path'
import fs from 'fs'
import Socket from '../../api/socket'

// The service class serves to implement our CRUDS or our Business Rules

class Post implements IPost {
    public _id?: string;
    public author: string;
    public place: string;
    public description: string;
    public hashtags: string;
    public image: string;
    public likes: number;

    constructor () {}

    async create (post: any, file: any) {
      const { author, place, description, hashtags } = post
      const { filename: image } = file

      const [name] = image.split('.')
      const filename = `${name}.jpg`

      await sharp(file.path)
        .resize(500)
        .jpeg({ quality: 70 })
        .toFile(path.resolve(file.destination, 'resized', filename))

      fs.unlinkSync(file.path)

      return modelPost.create({
        author,
        place,
        description,
        hashtags,
        image: filename
      }).then(thisPost => {
        Socket.io.emit('post', thisPost)

        return thisPost
      })
    }

    getAll (): Promise<IPost[]> {
      return modelPost.find().sort('-createdAt').then(createPosts)
    }

    addLike (id: string) {
      return modelPost.findById(id).then(thisPost => {
        thisPost.likes += 1

        thisPost.save()

        Socket.io.emit('like', thisPost)

        return thisPost
      })
    }
}

export default new Post()
