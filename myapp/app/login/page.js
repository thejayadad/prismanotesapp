'use client'
import React from 'react'
// import { authOptions } from '@/lib/auth'
// import { getServerSession } from 'next-auth'
import LoginWithGoogle from '@/components/buttons/LoginWithGoogle'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const LoginPage = () => {
    const session = useSession()
    if(session){
        redirect("/dashboard")
    }
  return (
    <div><h2 className='text-center'>LoginPage</h2>
        <LoginWithGoogle />
    </div>
  )
}

export default LoginPage