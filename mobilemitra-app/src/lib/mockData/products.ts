export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  rating: number;
  reviews: number;
  discount?: number;
}

import { generateProducts } from '../utils/productGenerator';

export const products: Product[] = generateProducts(3000);