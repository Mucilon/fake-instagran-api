import { Schema, model, Document } from 'mongoose'

interface IPostModel extends Document{
    author: string,
    place: string,
    description: string,
    hashtags: string,
    image: string,
    likes: number

}

const PostSchema = new Schema({
  author: String,
  place: String,
  description: String,
  hashtags: String,
  image: String,
  likes: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

export default model<IPostModel>('modelPost', PostSchema)
