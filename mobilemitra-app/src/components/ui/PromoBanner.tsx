'use client';

import React from 'react';

export default function PromoBanner() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white py-3 relative z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-center">
          <p className="text-sm md:text-base font-medium">
            🎉 Special Offer: Free shipping on orders over ₹999! Limited time only
            <a href="/products" className="ml-2 underline hover:no-underline">
              Shop Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}