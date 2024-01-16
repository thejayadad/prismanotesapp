import { getPosts } from '@/lib/data'
import getServerUser from '@/lib/getServerUser'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
 

const Dashboard = async () => {
  const user = await getServerUser()
    if (!user) {
      // Redirect to login if user is not authenticated
      redirect('/login');
      return null;
    }
    const email = user.email
    const posts = await getPosts()
    console.log("Email " + email)
    console.log("User " + user)
    // if(!user){
    //     redirect("/login")
    // }
  return (
    <section className='px-4 py-8'>
        <div className=' flex flex-col mx-auto max-w-screen-xl'>
            <div className='flex gap-4'>
            <span>Welcome, {email}</span>
            <Link href={'/dashboard/new'}>NewPost</Link>
            </div>
          {
              posts.length === 0 ? (
                <div>
                  No Post Yet
                </div>
              ) : (
                posts.map((post) => (
                  <div className='flex flex-col gap-2 border' key={post.id}>
                    <h2>{post.name}</h2>
                    <h4>{post.desc}</h4>
                    <Link href={`/dashboard/post/${post.id}`}>SeeMore</Link>
                  </div>
                ))
              )
          }
        </div>
    </section>
  )
}

export default Dashboard