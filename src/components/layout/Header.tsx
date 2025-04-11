'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getAllBrands, getAllCategories, getModelsByBrand } from '@/lib/mockData/products';

const MOBILE_BRANDS = getAllBrands();
const PRODUCT_CATEGORIES = getAllCategories();

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'models' | 'products' | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [brandModels, setBrandModels] = useState<string[]>([]);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    if (selectedBrand) {
      setBrandModels(getModelsByBrand(selectedBrand));
    } else {
      setBrandModels([]);
    }
  }, [selectedBrand]);

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
              <div 
                className="flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => {
                  setActiveDropdown('models');
                  setSelectedBrand(null);
                }}
              >
                <button className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${
                  isActive('/models') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''
                }`}>
                  Models
                </button>
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeDropdown === 'models' && (
                <div 
                  className="absolute top-full left-0 mt-0 pt-2"
                  onMouseEnter={() => setActiveDropdown('models')}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setSelectedBrand(null);
                  }}
                >
                  <div className="flex">
                    {/* Brands List */}
                    <div className="bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-l-lg shadow-lg py-2 w-64 max-h-96 overflow-y-auto">
                      {MOBILE_BRANDS.map((brand, index) => (
                        <div
                          key={index}
                          className={`px-4 py-2 cursor-pointer ${
                            selectedBrand === brand
                              ? 'bg-gray-100 dark:bg-gray-800 text-teal-600 dark:text-teal-400'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-400'
                          }`}
                          onMouseEnter={() => setSelectedBrand(brand)}
                        >
                          {brand}
                        </div>
                      ))}
                    </div>

                    {/* Models List */}
                    {selectedBrand && brandModels.length > 0 && (
                      <div className="bg-white dark:bg-dark-bg border border-l-0 border-gray-200 dark:border-gray-700 rounded-r-lg shadow-lg py-2 w-64 max-h-96 overflow-y-auto">
                        {brandModels.map((model, index) => (
                          <Link
                            key={index}
                            href={`/models/${selectedBrand.toLowerCase()}/${model.toLowerCase().replace(/ /g, '-')}`}
                            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-400"
                          >
                            {model}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <div 
                className="flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => setActiveDropdown('products')}
              >
                <button className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${
                  isActive('/products') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''
                }`}>
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
                  <div className="bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 max-h-96 overflow-y-auto">
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
              className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${
                isActive('/guides') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''
              }`}
            >
              Repair Guides
            </Link>
            <Link
              href="/seller/dashboard"
              className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${
                isActive('/seller/dashboard') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''
              }`}
            >
              Sell Products
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
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
                  className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${
                    isActive('/models') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''
                  } w-full text-left flex items-center justify-between`}
                  onClick={() => setSelectedBrand(null)}
                >
                  <span>Models</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="mt-2 bg-gray-50 dark:bg-gray-800 rounded-lg py-2 max-h-96 overflow-y-auto">
                  {MOBILE_BRANDS.map((brand, index) => (
                    <div key={index} className="px-4">
                      <div
                        className={`py-2 cursor-pointer font-medium ${
                          selectedBrand === brand
                            ? 'text-teal-600 dark:text-teal-400'
                            : 'text-gray-600 dark:text-gray-300'
                        }`}
                        onClick={() => setSelectedBrand(brand)}
                      >
                        {brand}
                      </div>
                      {selectedBrand === brand && brandModels.length > 0 && (
                        <div className="ml-4 border-l border-gray-200 dark:border-gray-700">
                          {brandModels.map((model, modelIndex) => (
                            <Link
                              key={modelIndex}
                              href={`/models/${brand.toLowerCase()}/${model.toLowerCase().replace(/ /g, '-')}`}
                              className="block py-2 pl-4 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {model}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <button
                  className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${
                    isActive('/products') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''
                  } w-full text-left flex items-center justify-between`}
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                >
                  <span>Products</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="mt-2 bg-gray-50 dark:bg-gray-800 rounded-lg py-2 max-h-96 overflow-y-auto">
                  {PRODUCT_CATEGORIES.map((category, index) => (
                    <Link
                      key={index}
                      href={`/products/${category.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/guides"
                className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${
                  isActive('/guides') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Repair Guides
              </Link>
              <Link
                href="/seller/dashboard"
                className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 ${
                  isActive('/seller/dashboard') ? 'text-teal-600 dark:text-teal-400 font-medium' : ''
                }`}
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