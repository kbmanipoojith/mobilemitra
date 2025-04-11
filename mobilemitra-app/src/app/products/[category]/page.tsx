'use client';

import { useParams } from 'next/navigation';
import { products } from '@/lib/mockData/products';
import ProductCard from '@/components/product/ProductCard';

export default function CategoryProductsPage() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category as string);
  
  const categoryProducts = products.filter(
    product => product.category.toLowerCase().replace(/ /g, '-') === decodedCategory
  );

  const displayCategory = decodedCategory
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (categoryProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Category Not Found</h1>
        <p className="text-gray-600">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{displayCategory}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image || '/images/placeholder.png'}
            category={product.category}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
} 