'use server'
import getServerUser from "./getServerUser";
import prisma from "@/lib/connect"

export const getPosts = async() => {
    try {
        const posts = await prisma.post.findMany({})
        return posts
    } catch (error) {
        throw new Error("Failed to fetch posts! " + error);

    }
}


export const getSinglePost = async({params}) => {
    const {id} = params
    try {
        if (!id) {
            throw new Error("Post ID is missing or undefined");
          }
      
          const post = await prisma.post.findUnique({
            where: {
              id: id,
            },
          });
      
          if (!post) {
            throw new Error("Post not found");
          }
      
          return post;
    } catch (error) {
        throw new Error("Failed to fetch post! " + error);

    }
}