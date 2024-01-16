import { getSinglePost } from '@/lib/data'
import React from 'react'

const SinglePost = async (id) => {
  const post = await getSinglePost(id)
  return (
    <section className='px-4 py-8'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-center'>{post.name}</h3>
        <h2>{post.name}</h2>
        <p>{post.desc}</p>
      </div>
    </section>
  )
}

export default SinglePost