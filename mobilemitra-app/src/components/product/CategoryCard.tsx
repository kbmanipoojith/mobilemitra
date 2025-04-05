'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export default function CategoryCard({
  id,
  name,
  image,
  slug,
}: CategoryCardProps) {
  return (
    <Link href={`/products?category=${slug}`} className="block">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 text-center hover:translate-y-[-5px]">
        <div className="relative w-full h-24 mb-3 mx-auto">
          <Image 
            src={image} 
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-sm font-medium text-gray-800 dark:text-white">{name}</h3>
      </div>
    </Link>
  );
}