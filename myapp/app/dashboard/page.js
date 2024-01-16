import getServerUser from '@/lib/getServerUser'
import React from 'react'

const Dashboard = async () => {
    const user = await getServerUser()
    const email = user.email
  return (
    <section className='px-4 py-8'>
        <div className=' flex flex-col mx-auto max-w-screen-xl'>
            <span>Welcome, {email}</span>

        </div>
    </section>
  )
}

export default Dashboard