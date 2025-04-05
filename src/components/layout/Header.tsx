'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            MobileMitra
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/products"
              className={`text-gray-600 hover:text-primary-600 ${
                isActive('/products') ? 'text-primary-600 font-medium' : ''
              }`}
            >
              Products
            </Link>
            <Link
              href="/guides"
              className={`text-gray-600 hover:text-primary-600 ${
                isActive('/guides') ? 'text-primary-600 font-medium' : ''
              }`}
            >
              Repair Guides
            </Link>
            <Link
              href="/seller/dashboard"
              className={`text-gray-600 hover:text-primary-600 ${
                isActive('/seller/dashboard') ? 'text-primary-600 font-medium' : ''
              }`}
            >
              Sell Products
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="text-gray-600 hover:text-primary-600"
            >
              Cart
            </Link>
            <Link
              href="/login"
              className="text-gray-600 hover:text-primary-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 