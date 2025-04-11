'use client';

import React, { useState } from 'react';
import { RepairGuide } from '@/lib/types/guide';
import { REPAIR_CATEGORIES, generateGuideId, getCommonSteps } from '@/lib/utils/guideUtils';
import RepairGuideCard from '@/components/guides/RepairGuideCard';

const mobilePhoneBrands = [
  'Samsung', 'Apple', 'Xiaomi', 'OnePlus', 'Vivo', 'Oppo', 'Realme',
  'Motorola', 'Nokia', 'Google', 'Nothing', 'iQOO', 'Poco'
];

export default function GuidesPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Generate guides for all brand-part combinations
  const guides: RepairGuide[] = React.useMemo(() => {
    const allGuides: RepairGuide[] = [];

    mobilePhoneBrands.forEach(brand => {
      REPAIR_CATEGORIES.forEach(category => {
        const guide: RepairGuide = {
          id: generateGuideId(brand, category.name),
          brand,
          part: category.name,
          difficulty: category.name === 'Battery' ? 'Easy' :
                     category.name === 'Screen' ? 'Medium' : 'Hard',
          timeRequired: category.name === 'Battery' ? '15-30 minutes' :
                       category.name === 'Screen' ? '30-45 minutes' : '45-60 minutes',
          steps: getCommonSteps(category.id),
          tools: Array.from(new Set(
            category.commonSteps.flatMap(step => step.tools || [])
          )),
          warnings: category.commonSteps
            .filter(step => step.warningNote)
            .map(step => step.warningNote!) || [],
          createdAt: new Date(),
          updatedAt: new Date()
        };
        allGuides.push(guide);
      });
    });

    return allGuides;
  }, []);

  // Filter guides based on selected brand and category
  const filteredGuides = guides.filter(guide => {
    const brandMatch = selectedBrand === 'all' || guide.brand.toLowerCase() === selectedBrand.toLowerCase();
    const categoryMatch = selectedCategory === 'all' || guide.part.toLowerCase() === selectedCategory.toLowerCase();
    return brandMatch && categoryMatch;
  });


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Mobile Phone Repair Guides
      </h1>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Brand
          </label>
          <select
            id="brand"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-3 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="all">All Brands</option>
            {mobilePhoneBrands.map(brand => (
              <option key={brand} value={brand.toLowerCase()}>{brand}</option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/2">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Repair Type
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-3 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="all">All Categories</option>
            {REPAIR_CATEGORIES.map(category => (
              <option key={category.id} value={category.name.toLowerCase()}>{category.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <RepairGuideCard key={guide.id} guide={guide} />
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No repair guides found for the selected filters.
          </p>
        </div>
      )}
    </div>
  );
}