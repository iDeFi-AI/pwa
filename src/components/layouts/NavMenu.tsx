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
  { label: 'Launch App', url: '/dapp' },
];

const NavMenu: React.FC<NavMenuProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure as='nav' className={`bg-white shadow ${isScrolled ? 'sticky-header' : ''}`}>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex px-2 lg:px-0'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href="/home">
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
                    <HeaderNavLink href={item.url} key={item.url}>
                      {item.label === 'Launch App' ? (
                        <button className='text-white bg-neorange px-3 py-2 rounded-full'>
                          {item.label}
                        </button>
                      ) : (
                        item.label
                      )}
                    </HeaderNavLink>
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
                <Link href={item.url} key={item.label}>
                  <div className='block py-2 text-base font-medium text-gray-600 hover:text-neorange'>
                    {item.label === 'Launch App' ? (
                      <button className='text-white bg-neorange px-3 py-2 rounded-full'>
                        {item.label}
                      </button>
                    ) : (
                      item.label
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

interface NavMenuProps {}

export default NavMenu;
