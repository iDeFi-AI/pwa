// Header.tsx

'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import NavMenu from './NavMenu';

const Header: React.FC<HeaderProps> = () => {
  // Ensure that there are no conditions or variables here that could cause differences between SSR and CSR
  return (
    <header id='App:Header' className={cn('bg-white')}>
      <NavMenu />
    </header>
  );
};

interface HeaderProps {}

export default Header;
