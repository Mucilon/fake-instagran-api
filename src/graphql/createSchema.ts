import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { PostResolvers } from './post/resolvers'

export const createSchema = () => {
  return buildSchema({
    resolvers: [PostResolvers]
  })
}
