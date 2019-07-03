/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata'
import { Field, ID, Int, ObjectType, InputType } from 'type-graphql'
import { IPost } from '../../modules/post/interface'

@ObjectType()
export class TypePost implements IPost {
    @Field(type => ID)
    _id?: string;
    @Field()
    author: string;
    @Field()
    place: string;
    @Field()
    description: string;
    @Field()
    hashtags: string;
    @Field()
    image: string;
    @Field(type => Int)
    likes: number;
}

@InputType()
export class InputTypePost implements IPost {
    @Field(type => ID)
    _id?: string;
    @Field()
    author: string;
    @Field()
    place: string;
    @Field()
    description: string;
    @Field()
    hashtags: string;
    @Field()
    image: string;
    @Field(type => Int)
    likes: number;
}
