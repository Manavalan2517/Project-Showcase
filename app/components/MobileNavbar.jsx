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
    <div className='fixed bottom-0 left-0 w-full'>
      <nav className='rounded-t-[24px] p-5 shadow-lg'>
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
                className={`mt-1 text-[10px] ${
                  activeTab === tab.name
                    ? 'font-bold text-[#45A045]'
                    : 'text-gray-400'
                }`}
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
