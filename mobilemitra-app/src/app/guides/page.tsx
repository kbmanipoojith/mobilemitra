'use client';

import { useState } from 'react';
import { mobilePhoneBrands } from '@/lib/mockData/brands';

const repairCategories = [
  'Screen Replacement',
  'Battery Replacement',
  'Charging Port Repair',
  'Speaker Repair',
  'Camera Replacement',
  'Back Panel Replacement',
  'Power Button Repair',
  'Volume Button Repair',
  'Motherboard Repair'
];

export default function GuidesPage() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mobile Repair Guides</h1>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <select 
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <option value="all">All Brands</option>
          {mobilePhoneBrands.map((brand) => (
            <option key={brand} value={brand.toLowerCase()}>{brand}</option>
          ))}
        </select>

        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <option value="all">All Repair Types</option>
          {repairCategories.map((category) => (
            <option key={category} value={category.toLowerCase()}>{category}</option>
          ))}
        </select>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Coming Soon Message */}
        <div className="col-span-full text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">
            Repair Guides Coming Soon!
          </h2>
          <p className="text-gray-500 dark:text-gray-500">
            We're currently working on comprehensive repair guides for all major mobile phone brands.
            Check back soon for detailed, step-by-step instructions.
          </p>
        </div>
      </div>
    </div>
  );
} 