// NavMenu.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NextImage from 'next/image';
import Link from 'next/link';
import LogoImage from '@/assets/imgs/logo.png';
import HeaderNavLink from '../links/HeaderNavLink';

const menuItems = [
  { label: `API`, url: `/api` },
  { label: `POC`, url: `/ipoc` },
  { label: `iDAC`, url: `/idac` },
  { label: `B1H0`, url: `/b1h0` },
  { label: `TEAM`, url: `/team` },
  { label: `QUANTUM`, url: `/quantum` },
  { label: 'FREE DEMO', url: '/demo' },
  { label: 'MUP', url: 'https://mup-nine.vercel.app/', requiresAuth: true },
];

const NavMenu: React.FC<NavMenuProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [authCode, setAuthCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthInput, setShowAuthInput] = useState(false);

  // Hardcoded access code
  const correctCode = 'MUP2024'; // Replace this with your desired access code

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAuthSubmit = () => {
    if (authCode === correctCode) {
      setIsAuthenticated(true);
      alert('Access granted!');
      window.location.href = menuItems.find(item => item.label === 'MUP')?.url || '/';
    } else {
      alert('Incorrect code. Please try again.');
    }
    setAuthCode('');
    setShowAuthInput(false);
  };

  return (
    <Disclosure as='nav' className={`bg-white shadow ${isScrolled ? 'sticky-header' : ''}`}>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex px-2 lg:px-0'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href="/home" className='no-underline'>
                    <NextImage
                      className='h-8 w-auto'
                      src={LogoImage}
                      alt='Logo'
                      width={210}
                      height={125}
                    />
                  </Link>
                </div>
              </div>
              <div className='flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end'></div>
              <div className='flex px-2 lg:px-0'>
                <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                  {menuItems.map((item) => (
                    item.requiresAuth && !isAuthenticated ? (
                      <button
                        key={item.url}
                        onClick={() => setShowAuthInput(true)}
                        className='text-neorange hover:text-neohover no-underline'
                      >
                        {item.label}
                      </button>
                    ) : (
                      <HeaderNavLink href={item.url} key={item.url}>
                        {item.label === 'MUP' ? (
                          <button className='bg-neorange hover:bg-neohover text-white px-4 py-2 rounded-full no-underline shadow-lg transform transition duration-300 hover:scale-105'>
                            {item.label}
                          </button>
                        ) : (
                          <span className='text-gray-600 hover:text-neorange no-underline'>
                            {item.label}
                          </span>
                        )}
                      </HeaderNavLink>
                    )
                  ))}
                </div>
              </div>
              <div className='flex items-center lg:hidden'>
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neorange'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='flex flex-col items-center space-y-2 py-3'>
              {menuItems.map((item) => (
                item.requiresAuth && !isAuthenticated ? (
                  <button
                    key={item.url}
                    onClick={() => setShowAuthInput(true)}
                    className='text-neorange hover:text-neohover no-underline'
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link href={item.url} key={item.label}>
                    <div className={`block text-base font-medium ${item.label === 'MUP' ? 'bg-neorange text-white hover:bg-neohover rounded-full px-4 py-2 no-underline shadow-lg transform transition duration-300 hover:scale-105' : 'text-gray-600 hover:text-neorange no-underline'}`}>
                      {item.label}
                    </div>
                  </Link>
                )
              ))}
            </div>
          </Disclosure.Panel>

          {/* Authentication Input Modal */}
          {showAuthInput && (
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center'>
              <div className='bg-white p-4 rounded shadow-md'>
                <h3 className='text-lg font-medium'>Enter Access Code</h3>
                <input
                  type='password'
                  value={authCode}
                  onChange={(e) => setAuthCode(e.target.value)}
                  className='border rounded p-2 mt-2'
                  placeholder='Enter code'
                />
                <div className='flex space-x-4 mt-4'>
                  <button
                    onClick={handleAuthSubmit}
                    className='bg-neorange hover:bg-neohover text-white px-4 py-2 rounded-full no-underline'
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setShowAuthInput(false)}
                    className='bg-gray-300 px-4 py-2 rounded-full no-underline'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Disclosure>
  );
};

interface NavMenuProps {}

export default NavMenu;
