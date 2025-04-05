'use client';

import { products } from '@/lib/mockData/products';
import ProductCard from '@/components/product/ProductCard';
import { useState } from 'react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      {/* Category Filter */}
      <div className="mb-8">
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <option value="all">All Categories</option>
          <option value="batteries">Batteries</option>
          <option value="screens">Screens</option>
          <option value="charging-ports">Charging Ports</option>
          <option value="back-panels">Back Panels</option>
          <option value="speakers">Speakers</option>
          <option value="cameras">Cameras</option>
          <option value="motherboards">Motherboards</option>
          <option value="power-buttons">Power Buttons</option>
          <option value="volume-buttons">Volume Buttons</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
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