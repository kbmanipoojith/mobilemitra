'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  discount?: number;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  discount,
}: ProductCardProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const discountedPrice = discount ? price - (price * (discount || 0)) / 100 : price;

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    // Here you would typically make an API call to add the item to the cart
    // For now, we'll just simulate the action with a timeout
    setTimeout(() => {
      setIsAddingToCart(false);
      // You can add a toast notification here to show success message
    }, 500);
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="relative pt-[100%] overflow-hidden bg-gray-100 dark:bg-gray-600">
        <Link href={`/products/${id}`} className="block">
          <Image 
            src={image} 
            alt={name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 dark:text-gray-300 mb-1">{category}</div>
        <Link href={`/products/${id}`} className="block">
          <h3 className="font-medium text-gray-800 dark:text-white mb-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors line-clamp-2">{name}</h3>
        </Link>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-gray-800 dark:text-white">₹{price.toLocaleString('en-IN')}</span>
            {discount > 0 && (
              <span className="text-gray-500 dark:text-gray-300 text-sm line-through ml-2">
                ₹{Math.round(price / (1 - discount / 100)).toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className={`text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 p-2 rounded-full transition-colors ${isAddingToCart ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Add to cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}