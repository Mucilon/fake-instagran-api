
export interface IPost {
    _id?: string;
    author: string;
    place: string;
    description: string;
    hashtags: string;
    image: string;
    likes: number;

}

export function createPost ({ _id, author, place, description, hashtags, image, likes }: any): IPost {
  return { _id, author, place, description, hashtags, image, likes }
}

export function createPosts (data: any[]): IPost[] {
  return data.map(createPost)
}

export function createPostById ({ _id, author, place, description, hashtags, image, likes }: any): IPost {
  return { _id, author, place, description, hashtags, image, likes }
}
