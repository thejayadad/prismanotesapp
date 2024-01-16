import React from 'react'
import AuthLinks from './AuthLinks'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
       <div className='flex justify-between items-center mx-auto max-w-screen-xl'>
       <AuthLinks />
        <Logo />
       </div>
    </header>   
  )
}

export default Navbar