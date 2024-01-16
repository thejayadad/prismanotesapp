import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='px-4 py-8'>
        <div className=''>
            Hero
            <Link href={'/login'}>
                Login
            </Link>
        </div>
    </section>
  )
}

export default Hero