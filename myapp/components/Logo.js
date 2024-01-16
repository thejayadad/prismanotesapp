import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
        SportsHub <span className='text-orange-300 text-2xl'>Connect</span>
    </Link>
  )
}

export default Logo