import Link from 'next/link'
import React, { useState } from 'react'

export const MobileNavbar = () => {
  const [activeTab, setActiveTab] = useState('Home')
  const tabs = [
    { name: 'Home', defaultIcon: '/home.svg', activeIcon: '/homeActive.svg' },
    { name: 'Projects', defaultIcon: '/bag.svg', activeIcon: '/bagActive.svg' },
    {
      name: 'Search',
      defaultIcon: '/search.svg',
      activeIcon: '/searchActive.svg'
    },
    {
      name: 'Category',
      defaultIcon: '/category.svg',
      activeIcon: '/categoryActive.svg'
    },
    {
      name: 'Profile',
      defaultIcon: '/profile.svg',
      activeIcon: '/profileActive.svg'
    }
  ]

  return (
    <div className='rounded-3xl bg-white shadow-md'>
      <nav className='absolute bottom-0 w-full p-5'>
        <div className='flex items-center justify-between space-x-4'>
          {tabs.map(tab => (
            <Link
              href='/'
              key={tab.name}
              className='flex flex-col text-center'
              onClick={() => setActiveTab(tab.name)}
            >
              <img
                src={activeTab === tab.name ? tab.activeIcon : tab.defaultIcon}
                alt={tab.name}
                className='h-[25px]'
              />
              <p
                className={`text-[10px] ${activeTab === tab.name ? 'font-bold text-[#45A045]' : ''}`}
              >
                {tab.name}
              </p>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
