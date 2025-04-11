'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useAuth } from '@/lib/context/AuthContext';
import { useCart } from '@/lib/context/CartContext';

// Cart badge component to show number of items in cart
const CartBadge = () => {
  const { totalItems } = useCart();
  
  if (totalItems === 0) return null;
  
  return (
    <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
      {totalItems > 9 ? '9+' : totalItems}
    </span>
  );
};

// Profile menu component
const ProfileMenu = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  if (!isAuthenticated) {
    return (
      <Link
        href="/login"
        className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </Link>
    );
  }
  
  return (
    <div className="relative">
      <button 
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
      >
        <span className="hidden sm:inline-block font-medium">{user?.name?.split(' ')[0]}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </button>
      
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
          </div>
          
          <Link 
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setDropdownOpen(false)}
          >
            Your Profile
          </Link>
          
          <Link 
            href="/orders"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setDropdownOpen(false)}
          >
            Your Orders
          </Link>
          
          {user?.isSeller && (
            <Link 
              href="/seller/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setDropdownOpen(false)}
            >
              Seller Dashboard
            </Link>
          )}
          
          <button
            onClick={() => {
              logout();
              setDropdownOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

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
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'brand' | 'products' | 'profile' | null>(null);
  const [modelsDropdownOpen, setModelsDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white dark:bg-dark-bg shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-teal-600 dark:text-teal-400">
            <Image src="/logo.svg" alt="MobileMitra Logo" width={40} height={40} className="text-teal-600 dark:text-teal-400" />
            <span>MobileMitra</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => setActiveDropdown('brand')}
              >
                <button
                  className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${isActive('/models') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''}`}
                >
                  Brand
                </button>
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeDropdown === 'brand' && (
                <div 
                  className="absolute top-full left-0 mt-0 pt-2 w-64"
                  onMouseEnter={() => setActiveDropdown('brand')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 max-h-96 overflow-y-auto">
                    {MOBILE_BRANDS.map((brand, index) => (
                      <Link
                        key={index}
                        href={`/models/${brand.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-400"
                      >
                        {brand}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => setActiveDropdown('products')}
              >
                <button
                  className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${isActive('/products') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''}`}
                >
                  Products
                </button>
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeDropdown === 'products' && (
                <div 
                  className="absolute top-full left-0 mt-0 pt-2 w-64"
                  onMouseEnter={() => setActiveDropdown('products')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2">
                    {PRODUCT_CATEGORIES.map((category, index) => (
                      <Link
                        key={index}
                        href={`/products/${category.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-400"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
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
              className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <CartBadge />
            </Link>
            
            <ProfileMenu />
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
                  Brand
                </button>
                {modelsDropdownOpen && (
                  <div className="mt-2 bg-gray-50 dark:bg-gray-800 rounded-lg py-2 max-h-96 overflow-y-auto">
                    {MOBILE_BRANDS.map((brand, index) => (
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
                    {PRODUCT_CATEGORIES.map((category, index) => (
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
  );
}