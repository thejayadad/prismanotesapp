'use client'
import { addPost } from '@/lib/actions'
import React from 'react'

const NewPost = () => {
  return (
    <div>
        <form
        className='flex flex-col'
        action={addPost}
        >
            <input
            type='text'

                name='name'
                placeholder='Name...'
            />
            <input
                name='desc'
                placeholder='Description...'
            />
            <input
            name='category'
            placeholder='Category...'
            />
            <button type='submit'>CreatePost</button>
        </form>
    </div>
  )
}

export default NewPost