/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { TypePost } from './type'
import Post from '../../modules/post/service'

@Resolver(TypePost)
export class PostResolvers {
    @Query(returns => [TypePost], { description: 'Get all the recipes from around the world ' })
  async getPosts (): Promise<TypePost[]> {
    return Post.getAll()
  }

  @Mutation(returns => TypePost)
    addLike (
    @Arg('id') id: string
    ): Promise<TypePost> {
      return Post.addLike(id)
    }
}
