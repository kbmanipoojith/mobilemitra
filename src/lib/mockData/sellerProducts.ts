import { Product } from './products'
import { User } from './users'

export interface SellerProduct extends Product {
  seller: User
  status: 'Active' | 'Inactive' | 'Out of Stock'
  createdAt: string
  updatedAt: string
}

export const sellerProducts: SellerProduct[] = [
  {
    id: '1',
    name: 'iPhone 13 Pro Battery',
    description: 'Original replacement battery for iPhone 13 Pro with 3095mAh capacity.',
    price: 2999,
    category: 'Batteries',
    image: '/images/products/iphone-13-pro-battery.jpg',
    stock: 10,
    rating: 4.5,
    reviews: 120,
    seller: {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password123',
      isSeller: true,
      address: {
        street: '456 Market St',
        city: 'Delhi',
        state: 'Delhi',
        country: 'India',
        zipCode: '110001',
      },
      phone: '+91 9876543211',
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
    },
    status: 'Active',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
  {
    id: '2',
    name: 'Samsung Galaxy S21 Screen',
    description: 'Original AMOLED display assembly for Samsung Galaxy S21.',
    price: 8999,
    category: 'Screens',
    image: '/images/products/samsung-s21-screen.jpg',
    stock: 5,
    rating: 4.2,
    reviews: 85,
    seller: {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password123',
      isSeller: true,
      address: {
        street: '456 Market St',
        city: 'Delhi',
        state: 'Delhi',
        country: 'India',
        zipCode: '110001',
      },
      phone: '+91 9876543211',
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
    },
    status: 'Active',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
] 