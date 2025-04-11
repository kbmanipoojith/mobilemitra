'use client';

import { useState, FormEvent } from 'react';
import { getAllBrands, getModelsByBrand, getAllCategories, getSubcategoriesByCategory } from '@/lib/mockData/products';
import { Brand } from '@/lib/mockData/brands';
import { Category, Subcategory } from '@/lib/mockData/categories';
import { Model } from '@/lib/mockData/brands';

interface FormData {
  name: string;
  brand: string;
  model: string;
  category: string;
  subcategory?: string;
  price: string;
  stock: string;
  description: string;
  image: File | null;
}

export default function AddNewProductPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    brand: '',
    model: '',
    category: '',
    subcategory: '',
    price: '',
    stock: '',
    description: '',
    image: null
  });

  const [availableModels, setAvailableModels] = useState<Model[]>([]);
  const [availableSubcategories, setAvailableSubcategories] = useState<Subcategory[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const brands = getAllBrands();
  const categories = getAllCategories();

  const handleBrandChange = (brandId: string) => {
    const models = getModelsByBrand(brandId);
    setAvailableModels(models);
    setFormData(prev => ({ ...prev, brand: brandId, model: '' }));
  };

  const handleCategoryChange = (categoryId: string) => {
    const subcategories = getSubcategoriesByCategory(categoryId);
    setAvailableSubcategories(subcategories);
    setFormData(prev => ({ ...prev, category: categoryId, subcategory: '' }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      // TODO: Implement API call to save product
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSuccess('Product added successfully!');
      setFormData({
        name: '',
        brand: '',
        model: '',
        category: '',
        subcategory: '',
        price: '',
        stock: '',
        description: '',
        image: null
      });
    } catch (err) {
      setError('Failed to add product. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Add New Product</h1>

        <form onSubmit={handleSubmit} className="max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          {error && (
            <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">
              {success}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Brand
              </label>
              <select
                value={formData.brand}
                onChange={(e) => handleBrandChange(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Model
              </label>
              <select
                value={formData.model}
                onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                required
                disabled={!formData.brand}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Model</option>
                {availableModels.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {availableSubcategories.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subcategory
                </label>
                <select
                  value={formData.subcategory}
                  onChange={(e) => setFormData(prev => ({ ...prev, subcategory: e.target.value }))}
                  required
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select Subcategory</option>
                  {availableSubcategories.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Stock
              </label>
              <input
                type="number"
                min="0"
                value={formData.stock}
                onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              required
              rows={4}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Product Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.files?.[0] || null }))}
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Adding Product...' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 