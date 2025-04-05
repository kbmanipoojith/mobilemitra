'use client';

import { useParams } from 'next/navigation';
import { mobilePhoneBrands } from '@/lib/mockData/brands';

export default function BrandModelsPage() {
  const { brand } = useParams();
  const decodedBrand = decodeURIComponent(brand as string);
  const isValidBrand = mobilePhoneBrands.map((b: string) => b.toLowerCase().replace(/ /g, '-')).includes(decodedBrand);

  if (!isValidBrand) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Brand Not Found</h1>
        <p className="text-gray-600">The brand you're looking for doesn't exist in our database.</p>
      </div>
    );
  }

  const displayBrand = mobilePhoneBrands.find((b: string) => b.toLowerCase().replace(/ /g, '-') === decodedBrand);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{displayBrand} Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your model cards here */}
        <p className="text-gray-600">Coming soon: List of {displayBrand} models</p>
      </div>
    </div>
  );
} 