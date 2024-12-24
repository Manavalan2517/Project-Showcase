
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import React from 'react'

export const TabletNavbar = () => {
  return (
    <div>
      <div className=''>
        <nav className='w-full'>
          <div className='flex w-full items-center justify-between p-4'>
            <Link href='/' className='flex items-center mr-4'>
              <img src='/logo.jpg' alt='logo' className='h-8 rounded-lg mr-4' />
              <h1 className='text-xl font-bold text-slate-900'>Brojects</h1>
            </Link>
            <div className='mx-4 flex items-center justify-between space-x-2'>
              <Link href='/'>
                <Button variant='link'>
                  <h1 className='text-lg'>Home</h1>
                </Button>
              </Link>
              <Link href='/'>
                <Button variant='link'>
                  <h1 className='text-lg'>Projects</h1>
                </Button>
              </Link>
              <Link href='/'>
                <Button variant='link'>
                  <h1 className='text-lg'>About us</h1>
                </Button>
              </Link>
              <Link href='/'>
                <Button variant='link'>
                  <h1 className='text-lg'>Contact</h1>
                </Button>
              </Link>
              <Link href='/'>
                <Button variant='link'>
                  <h1 className='text-lg'>FAQ</h1>
                </Button>
              </Link>
            </div>

            <div className='flex items-center justify-between'>
              <Link href={'/'}>
                <Button variant='customGreen'>
                  <h1 className='font-semibold'>Get Started</h1>
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
