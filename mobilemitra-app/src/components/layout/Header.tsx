'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import PromoBanner from '@/components/ui/PromoBanner';

const mobilePhoneBrands = [
  'SAMSUNG', 'vivo', 'Xiaomi', 'Apple', 'realme', 'OPPO', 'MOTOROLA', 'ONEPLUS',
  'NOKIA', 'LG', 'HUAWEI', 'Infinix', 'Micromax', 'Lenovo', 'TECNO Mobile',
  'HTC', 'LAVA', 'INTEX', 'Karbonn', 'ZTE', 'ASUS', 'HONOR', 'Alcatel',
  'BLU Smartphones', 'SPICE', 'Swing Telecom', 'SONY', 'Celkon', 'Swipe',
  'Google', 'iBall', 'itel', 'Videocon', 'Panasonic', 'GIONEE', 'Microsoft',
  'Acer', 'Cubot', 'WIKO', 'Blackview', 'uleFone', 'MEIZU', 'DOOGEE', 'ZEN',
  'XOLO', 'BlackBerry', 'Allview', 'IKALL', 'Coolpad', 'MAXX', 'UMIDIGI',
  'SIEMENS', 'ZOPO', 'rage', 'SANSUI', 'Nothing', 'fly', 'OUKITEL', 'HITECH', 'TCL'
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'models' | 'products' | null>(null);
  const [modelsDropdownOpen, setModelsDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const productCategories = [
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

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <PromoBanner />
      <header className="bg-white dark:bg-dark-bg shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-teal-600 dark:text-teal-400">
              <Image src="/logo.svg" alt="MobileMitra Logo" width={40} height={40} className="text-teal-600 dark:text-teal-400" />
              <span>MobileMitra</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button
                  className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${isActive('/models') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''}`}
                  onMouseEnter={() => setActiveDropdown('models')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Models
                </button>
                {activeDropdown === 'models' && (
                  <div 
                    className="models-dropdown absolute top-full left-0 mt-2 w-64 bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 max-h-96 overflow-y-auto z-50"
                    onMouseEnter={() => setActiveDropdown('models')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {mobilePhoneBrands.map((brand, index) => (
                      <Link
                        key={index}
                        href={`/models/${brand.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-400"
                      >
                        {brand}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative group">
                <button
                  className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${isActive('/products') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''}`}
                  onMouseEnter={() => setActiveDropdown('products')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Products
                </button>
                {activeDropdown === 'products' && (
                  <div 
                    className="products-dropdown absolute top-full left-0 mt-2 w-64 bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={() => setActiveDropdown('products')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {productCategories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/products/${category.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-400"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/guides"
                className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${isActive('/guides') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''}`}
              >
                Repair Guides
              </Link>
              <Link
                href="/seller/dashboard"
                className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${isActive('/seller/dashboard') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''}`}
              >
                Sell Products
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="/cart"
                className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
              <Link
                href="/login"
                className="text-gray-600 hover:text-teal-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              
              <button 
                className="md:hidden text-gray-600 hover:text-teal-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <nav className="flex flex-col space-y-4">
                <div className="relative">
                  <button
                    className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${isActive('/models') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''} w-full text-left`}
                    onClick={() => setModelsDropdownOpen(!modelsDropdownOpen)}
                  >
                    Models
                  </button>
                  {modelsDropdownOpen && (
                    <div className="mt-2 bg-gray-50 dark:bg-gray-800 rounded-lg py-2">
                      {mobilePhoneBrands.map((brand, index) => (
                        <Link
                          key={index}
                          href={`/models/${brand.toLowerCase().replace(/ /g, '-')}`}
                          className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-teal-600 dark:hover:text-teal-400"
                          onClick={() => {
                            setModelsDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${isActive('/products') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''} w-full text-left`}
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  >
                    Products
                  </button>
                  {productsDropdownOpen && (
                    <div className="mt-2 bg-gray-50 dark:bg-gray-800 rounded-lg py-2">
                      {productCategories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/products/${category.toLowerCase().replace(/ /g, '-')}`}
                          className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-teal-600 dark:hover:text-teal-400"
                          onClick={() => {
                            setProductsDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/guides"
                  className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${isActive('/guides') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Repair Guides
                </Link>
                <Link
                  href="/seller/dashboard"
                  className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${isActive('/seller/dashboard') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sell Products
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}