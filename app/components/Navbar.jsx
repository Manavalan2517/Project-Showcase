'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TabletNavbar } from './TabletNavbar'

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    // Set the initial width when the component mounts
    handleResize()

    // Add event listener for resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // If `windowWidth` is null, it means the component is still hydrating.
  if (windowWidth === null) {
    return null // Prevent rendering until `windowWidth` is available
  }

  return (
    <div>
      {windowWidth > 1023 ? (
        <div className='mx-14'>
          <nav className='w-full'>
            <div className='flex w-full items-center justify-between p-4'>
              <Link href='/' className='flex items-center space-x-4'>
                <img src='/logo.jpg' alt='logo' className='h-10 rounded-lg' />
                <h1 className='text-xl font-bold text-slate-900'>Brojects</h1>
              </Link>
              <div className='mx-4 flex items-center justify-between space-x-4'>
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

              <div className='flex items-center justify-between space-x-4'>
                <Link href='/'>
                  <Button variant='customGreen'>
                    <h1 className='font-semibold'>Get Started</h1>
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      ) : windowWidth > 425 ? (
        <div>
          <TabletNavbar/>
        </div>
      ) : (
        <div className='p-4 text-center'>
          <h2 className='text-lg font-semibold'>Mobile Navbar</h2>
          <p>Adjust your design for mobile here.</p>
        </div>
      )}
    </div>
  )
}
