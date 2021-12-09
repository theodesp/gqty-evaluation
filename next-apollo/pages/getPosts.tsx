import client from './client'
import getPostsQuery from './posts.graphql';
import {GetPostList} from "../types";

export const getPosts = async () => {
  const {
    data,
  } = await client.query<GetPostList>(getPostsQuery).toPromise()

  return data?.posts?.nodes?.slice() ?? []
}