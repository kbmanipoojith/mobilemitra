'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const MOBILE_BRANDS = [
  'SAMSUNG', 'vivo', 'Xiaomi', 'Apple', 'realme', 'OPPO', 'MOTOROLA', 'ONEPLUS', 'NOKIA', 'LG',
  'HUAWEI', 'Infinix', 'Micromax', 'Lenovo', 'TECNO Mobile', 'HTC', 'LAVA', 'INTEX', 'Karbonn',
  'ZTE', 'ASUS', 'HONOR', 'Alcatel', 'BLU Smartphones', 'SPICE', 'Swing Telecom', 'SONY', 'Celkon',
  'Swipe', 'Google', 'iBall', 'itel', 'Videocon', 'Panasonic', 'GIONEE', 'Microsoft', 'Acer',
  'Cubot', 'WIKO', 'Blackview', 'uleFone', 'MEIZU', 'DOOGEE', 'ZEN', 'XOLO', 'BlackBerry',
  'Allview', 'IKALL', 'Coolpad', 'MAXX', 'UMIDIGI', 'SIEMENS', 'ZOPO', 'rage', 'SANSUI',
  'Nothing', 'fly', 'OUKITEL', 'HITECH', 'TCL'
];

const PRODUCT_CATEGORIES = [
  'Batteries',
  'Screens',
  'Charging Ports',
  'Back Panels',
  'Speakers',
  'Cameras',
  'Motherboards',
  'Power Buttons',
  'Volume Buttons'
];

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <header className={`bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors duration-300 ${!isLandingPage ? 'sticky top-0' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-teal-600 dark:text-teal-400">
              <Image
                src="/logo.svg"
                alt="MobileMitra Logo"
                width={40}
                height={40}
                className="text-teal-600 dark:text-teal-400"
              />
              <span>MobileMitra</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <div 
                  className="flex items-center space-x-1 cursor-pointer"
                  onMouseEnter={() => setIsModelsOpen(true)}
                >
                  <button className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 inline-flex items-center">
                    Models
                  </button>
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
                {isModelsOpen && (
                  <div 
                    className="absolute left-0 top-full mt-0 pt-2 w-64"
                    onMouseEnter={() => setIsModelsOpen(true)}
                    onMouseLeave={() => setIsModelsOpen(false)}
                  >
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg py-2 max-h-96 overflow-y-auto">
                      {MOBILE_BRANDS.map((brand, index) => (
                        <Link
                          key={index}
                          href={`/models/${brand.toLowerCase().replace(/ /g, '-')}`}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative group">
                <div 
                  className="flex items-center space-x-1 cursor-pointer"
                  onMouseEnter={() => setIsProductsOpen(true)}
                >
                  <button className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 inline-flex items-center">
                    Products
                  </button>
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
                {isProductsOpen && (
                  <div 
                    className="absolute left-0 top-full mt-0 pt-2 w-64"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg py-2">
                      {PRODUCT_CATEGORIES.map((category, index) => (
                        <Link
                          key={index}
                          href={`/products/${category.toLowerCase().replace(/ /g, '-')}`}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/repair-guides"
                className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Repair Guides
              </Link>
              <Link
                href="/seller/dashboard"
                className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Sell Products
              </Link>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors duration-200"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* Cart */}
              <Link href="/cart" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>

              {/* User Profile */}
              <Link href="/login" className="text-gray-600 hover:text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-gray-600 hover:text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Special Offer Banner - Only show on landing page */}
      {isLandingPage && (
        <div className="bg-teal-600 text-white py-2 text-center">
          <p className="text-sm">
            🎉 Special Offer: Free shipping on orders over ₹999! Limited time only{' '}
            <Link href="/products" className="underline font-medium">
              Shop Now
            </Link>
          </p>
        </div>
      )}
    </>
  );
}