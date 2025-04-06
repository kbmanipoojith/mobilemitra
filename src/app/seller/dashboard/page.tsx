'use client';

import { useState, FormEvent, useEffect } from 'react';
import { getAllBrands, getAllCategories, getModelsByBrand, products, type Product } from '@/lib/mockData/products';
import ProductCard from '@/components/product/ProductCard';

const MOBILE_BRANDS = getAllBrands();
const SPARE_PART_TYPES = getAllCategories();
const ITEMS_PER_PAGE = 20;

// Expanded mock data for models
const MOCK_MODELS: { [key: string]: string[] } = {
  'SAMSUNG': ['Galaxy S23 Ultra', 'Galaxy S23+', 'Galaxy S23', 'Galaxy S22 Ultra', 'Galaxy S22+', 'Galaxy S22', 'Galaxy S21 FE', 'Galaxy Z Fold4', 'Galaxy Z Flip4', 'Galaxy A73', 'Galaxy A53'],
  'Apple': ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15', 'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14', 'iPhone 13 Pro Max', 'iPhone 13'],
  'Xiaomi': ['Redmi Note 12 Pro', 'Redmi Note 12', 'Redmi 12C', 'POCO X5 Pro', 'POCO X5', 'Redmi Note 11 Pro+', 'Redmi Note 11 Pro', 'Redmi Note 11S', 'Redmi Note 11'],
  'vivo': ['V27 Pro', 'V27', 'Y100', 'Y56', 'V25 Pro', 'V25', 'T1 Pro', 'T1', 'Y75', 'Y35'],
  'OPPO': ['Find N2 Flip', 'Reno8 T', 'A78', 'A77s', 'F21s Pro', 'Reno8', 'Reno8 Pro', 'K10', 'F21 Pro', 'A57'],
  'realme': ['GT Neo 5', '10 Pro+', '10 Pro', '10', 'C55', 'GT Neo 3T', 'GT Neo 3', '9 Pro+', '9 Pro', '9i'],
  'MOTOROLA': ['Edge 40 Pro', 'Edge 30 Ultra', 'Edge 30 Fusion', 'Edge 30 Pro', 'G73', 'G53', 'G32', 'Edge 30', 'G52', 'G42'],
  'ONEPLUS': ['11R', '11', '10T', '10R', '10 Pro', 'Nord CE 3 Lite', 'Nord CE 2 Lite', 'Nord CE 2', 'Nord 2T', '9RT'],
  // Add more brands as needed
};

interface ProductFormData {
  name: string;
  price: string;
  category: string;
  description: string;
  stock: string;
  brand: string;
  model: string;
  partType: string;
}

const dropdownStyles = {
  select: `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 
          focus:ring-blue-500 appearance-none bg-white relative`,
  selectContainer: `relative`,
  dropdown: `max-h-[12rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 
            scrollbar-track-gray-100`
};

export default function SellerDashboard() {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    price: '',
    category: 'Spare Parts',
    description: '',
    stock: '',
    brand: '',
    model: '',
    partType: ''
  });
  
  // Authentication check will be handled by the login page
  // The login page will redirect to this page only if the user is a seller
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  
  // Product listing state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const categories = ['all', ...getAllCategories()];

  useEffect(() => {
    if (formData.brand) {
      const models = MOCK_MODELS[formData.brand] || [];
      setAvailableModels(models);
      if (!models.includes(formData.model)) {
        setFormData(prev => ({ ...prev, model: '' }));
      }
    } else {
      setAvailableModels([]);
      setFormData(prev => ({ ...prev, model: '' }));
    }
  }, [formData.brand]);

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // TODO: Implement actual product upload logic with backend
      console.log('Product upload attempt:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, just show success message
      setSuccessMessage('Product uploaded successfully!');
      setFormData({
        name: '',
        price: '',
        category: 'Spare Parts',
        description: '',
        stock: '',
        brand: '',
        model: '',
        partType: ''
      });
    } catch (error) {
      setErrorMessage('Failed to upload product. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8">
        {/* Upload Product Form Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Upload New Product</h2>
          
          {successMessage && (
            <div className="mb-4 p-4 bg-green-50 border border-green-400 text-green-700 rounded">
              {successMessage}
            </div>
          )}
          
          {errorMessage && (
            <div className="mb-4 p-4 bg-red-50 border border-red-400 text-red-700 rounded">
              {errorMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className={dropdownStyles.selectContainer}>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                Mobile Brand
              </label>
              <div className="relative">
                <select
                  id="brand"
                  name="brand"
                  required
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className={dropdownStyles.select}
                  size={6}
                >
                  <option value="">Select Brand</option>
                  {MOBILE_BRANDS.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={dropdownStyles.selectContainer}>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                Mobile Model
              </label>
              <div className="relative">
                <select
                  id="model"
                  name="model"
                  required
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className={dropdownStyles.select}
                  disabled={!formData.brand}
                  size={6}
                >
                  <option value="">Select Model</option>
                  {availableModels.map((model) => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={dropdownStyles.selectContainer}>
              <label htmlFor="partType" className="block text-sm font-medium text-gray-700">
                Spare Part Type
              </label>
              <div className="relative">
                <select
                  id="partType"
                  name="partType"
                  required
                  value={formData.partType}
                  onChange={(e) => setFormData({ ...formData, partType: e.target.value })}
                  className={dropdownStyles.select}
                  size={6}
                >
                  <option value="">Select Part Type</option>
                  {SPARE_PART_TYPES.map((part) => (
                    <option key={part} value={part}>{part}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price (₹)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                required
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                Stock Quantity
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                required
                min="0"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isSubmitting
                    ? 'bg-blue-400'
                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }`}
              >
                {isSubmitting ? 'Uploading...' : 'Upload Product'}
              </button>
            </div>
          </form>
        </div>
        
        {/* Product Listing Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">All Products</h2>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredProducts.length} products
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-white"
            />
            
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {currentProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    discount={product.discount}
                    rating={product.rating}
                    reviews={product.reviews}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Previous
                  </button>
                  
                  <div className="flex gap-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-4 py-2 border rounded-md ${
                            currentPage === pageNum
                              ? 'bg-teal-600 text-white border-teal-600'
                              : 'border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          {pageNum}
                    </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
} 