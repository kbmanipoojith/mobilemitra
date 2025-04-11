'use client';

import { useParams } from 'next/navigation';
import { mobilePhoneBrands } from '@/lib/mockData/brands';
import Link from 'next/link';

// Mock data for mobile models
const BRAND_MODELS: Record<string, string[]> = {
  'samsung': [
    'Galaxy S23 Ultra',
    'Galaxy S23+',
    'Galaxy S23',
    'Galaxy Z Fold5',
    'Galaxy Z Flip5',
    'Galaxy A54 5G',
    'Galaxy A34 5G',
    'Galaxy M54 5G',
    'Galaxy M34 5G',
    'Galaxy F54 5G',
  ],
  'vivo': ['V29 Pro', 'V27 Pro', 'X90 Pro+', 'X90 Pro', 'X90', 'V25 Pro', 'V25'],
  'xiaomi': ['13 Pro', '13', '12 Pro', '12', 'Redmi Note 12 Pro+', 'Redmi Note 12 Pro'],
  'apple': ['iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14', 'iPhone 13'],
  'realme': ['11 Pro+ 5G', '11 Pro 5G', '11x 5G', '10 Pro+ 5G', '10 Pro 5G'],
  'oppo': ['Find N3 Flip', 'Reno10 Pro+ 5G', 'Reno10 Pro 5G', 'Reno10 5G'],
  'motorola': ['Edge 40 Pro', 'Edge 40', 'G84 5G', 'G54 5G', 'G32'],
  'oneplus': ['11 5G', '11R 5G', 'Nord CE 3 Lite 5G', 'Nord CE 3 5G'],
  'nokia': ['G42 5G', 'C32', 'G21', 'C22', 'C12'],
  'nothing': ['Phone (2)', 'Phone (1)'],
};

export default function BrandModelsPage() {
  const { brand } = useParams();
  const decodedBrand = decodeURIComponent(brand as string);
  const isValidBrand = mobilePhoneBrands.map((b: string) => b.toLowerCase().replace(/ /g, '-')).includes(decodedBrand);

  if (!isValidBrand) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Brand Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400">The brand you're looking for doesn't exist in our database.</p>
      </div>
    );
  }

  const displayBrand = mobilePhoneBrands.find((b: string) => b.toLowerCase().replace(/ /g, '-') === decodedBrand);
  const brandModels = BRAND_MODELS[displayBrand?.toLowerCase() || ''] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">{displayBrand} Models</h1>
      {brandModels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandModels.map((model, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  {displayBrand} {model}
                </h3>
                <Link
                  href={`/products?model=${encodeURIComponent(`${displayBrand} ${model}`)}`}
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium"
                >
                  View Parts
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No models found for {displayBrand}. Please check back later.
          </p>
        </div>
      )}
    </div>
  );
}