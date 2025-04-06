'use client';

import { products } from '@/lib/mockData/products';
import ProductCard from '@/components/product/ProductCard';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

const ITEMS_PER_PAGE_OPTIONS = [12, 24, 48, 96];
const CATEGORIES = [
  'Batteries',
  'Screens',
  'Charging Ports',
  'Back Panels',
  'Speakers',
  'Cameras',
  'Motherboards',
  'Power Buttons',
  'Volume Buttons'
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const modelParam = searchParams.get('model');

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    // Filter by model if specified
    if (modelParam) {
      const searchTerm = modelParam.toLowerCase();
      result = result.filter(product => {
        // Split product name into parts (e.g., "Samsung S23 Ultra Battery")
        const nameParts = product.name.split(' ');
        // Get brand and model (e.g., "Samsung" and "S23 Ultra")
        const brand = nameParts[0];
        const model = nameParts.slice(1, -1).join(' ');
        // Create full device name (e.g., "Samsung S23 Ultra")
        const deviceName = `${brand} ${model}`.toLowerCase();
        
        return deviceName === searchTerm;
      });
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Apply sorting
    result = [...result].sort((a, b) => {
      if (sortBy === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      } else if (sortBy === 'rating') {
        return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
      } else {
        return sortOrder === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
    });

    return result;
  }, [selectedCategory, sortBy, sortOrder]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);

  // Generate page numbers for pagination
  const pageNumbers = useMemo(() => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push(-1); // Separator
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push(-1);
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push(-1);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push(-1);
        pages.push(totalPages);
      }
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      {/* Filters and Controls */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Category</label>
          <select 
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="all">All Categories</option>
            {CATEGORIES.map(category => (
              <option key={category} value={category.toLowerCase()}>{category}</option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Sort Order */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Order</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* Items Per Page */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Items Per Page</label>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            {ITEMS_PER_PAGE_OPTIONS.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Summary */}
      <div className="mb-4 text-gray-600 dark:text-gray-400">
        Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredAndSortedProducts.length)} of {filteredAndSortedProducts.length} products
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {paginatedProducts.map((product) => (
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

      {/* Simple Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <span className="text-gray-600 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}