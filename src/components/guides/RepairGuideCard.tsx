'use client';

import React from 'react';
import Link from 'next/link';
import { RepairGuide } from '@/lib/types/guide';

interface RepairGuideCardProps {
  guide: RepairGuide;
}

export default function RepairGuideCard({ guide }: RepairGuideCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {guide.brand} {guide.model && `- ${guide.model}`}
          </h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            guide.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
            guide.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {guide.difficulty}
          </span>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {guide.part} Replacement
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            Estimated time: {guide.timeRequired}
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tools Required:</h5>
          <div className="flex flex-wrap gap-2">
            {guide.tools.map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <Link
          href={`/guides/${guide.id}`}
          className="block w-full text-center bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          View Guide
        </Link>
      </div>
    </div>
  );
}