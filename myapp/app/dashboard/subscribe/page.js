'use client'
import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from '@/components/PaymentForm';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  

const Subscribe = () => {
  return (
    <section className='px-4 py-8'>
        <h2 className='text-center'>Subscription PAge</h2>
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    </section>
  )
}

export default Subscribe