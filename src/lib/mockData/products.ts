import { Brand, Model } from './brands';
import { Category, Subcategory } from './categories';
import { generateProducts } from './generateProducts';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  brand: Brand;
  model: Model;
  category: Category;
  subcategory?: Subcategory;
  compatibility: string[];
  specifications: {
    [key: string]: string | number | boolean;
  };
}

// Helper function to generate product ID
export const generateProductId = (brand: string, model: string, category: string): string => {
  return `${brand.toLowerCase()}-${model.toLowerCase().replace(/ /g, '-')}-${category.toLowerCase().replace(/ /g, '-')}`;
};

// Helper functions to get filtered products
export const getProductsByBrand = (brandId: string): Product[] => {
  return products.filter(product => product.brand.id === brandId);
};

export const getProductsByModel = (brandId: string, modelId: string): Product[] => {
  return products.filter(
    product => product.brand.id === brandId && product.model.id === modelId
  );
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category.id === categoryId);
};

export const getProductsBySubcategory = (categoryId: string, subcategoryId: string): Product[] => {
  return products.filter(
    product => 
      product.category.id === categoryId && 
      product.subcategory?.id === subcategoryId
  );
};

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.brand.name.toLowerCase().includes(searchTerm) ||
    product.model.name.toLowerCase().includes(searchTerm) ||
    product.category.name.toLowerCase().includes(searchTerm)
  );
};

// Get all unique brands
export const getAllBrands = (): Brand[] => {
  const uniqueBrands = new Set<string>();
  return products
    .filter(product => {
      if (!uniqueBrands.has(product.brand.id)) {
        uniqueBrands.add(product.brand.id);
        return true;
      }
      return false;
    })
    .map(product => product.brand);
};

// Get all models for a brand
export const getModelsByBrand = (brandId: string): Model[] => {
  const uniqueModels = new Set<string>();
  return products
    .filter(product => product.brand.id === brandId)
    .filter(product => {
      if (!uniqueModels.has(product.model.id)) {
        uniqueModels.add(product.model.id);
        return true;
      }
      return false;
    })
    .map(product => product.model);
};

// Get all categories
export const getAllCategories = (): Category[] => {
  const uniqueCategories = new Set<string>();
  return products
    .filter(product => {
      if (!uniqueCategories.has(product.category.id)) {
        uniqueCategories.add(product.category.id);
        return true;
      }
      return false;
    })
    .map(product => product.category);
};

// Get all subcategories for a category
export const getSubcategoriesByCategory = (categoryId: string): Subcategory[] => {
  const category = products.find(product => product.category.id === categoryId)?.category;
  return category?.subcategories || [];
};

// Generate and export the products array
export const products: Product[] = generateProducts(); 