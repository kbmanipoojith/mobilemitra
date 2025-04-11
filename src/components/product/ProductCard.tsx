'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
  rating?: number;
  reviews?: number;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  discount = 0,
  rating,
  reviews
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const discountedPrice = discount > 0 ? price - (price * discount) / 100 : price;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link href={`/products/${id}`} className="block relative pt-[100%]">
        <div className="absolute inset-0">
          <Image
            src={imageError ? '/images/placeholder.png' : image}
            alt={name}
            fill
            className="object-contain p-4 transition-transform duration-300 hover:scale-105"
            onError={() => setImageError(true)}
            priority={false}
          />
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{category}</div>
        <Link href={`/products/${id}`}>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>

        {rating && reviews && (
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400'
                      : i < rating
                      ? 'text-yellow-200'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
              ({reviews})
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ₹{discountedPrice.toLocaleString('en-IN')}
            </span>
            {discount > 0 && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                ₹{price.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <button
            onClick={() => {}} // TODO: Implement add to cart
            className="p-2 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 rounded-full transition-colors"
            aria-label="Add to cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 