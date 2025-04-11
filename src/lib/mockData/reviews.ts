import { Product } from './products'
import { User } from './users'

export interface Review {
  id: string
  product: Product
  user: User
  rating: number
  comment: string
  createdAt: string
  updatedAt: string
}

export const reviews: Review[] = [
  {
    id: '1',
    product: {
      id: '1',
      name: 'iPhone 13 Pro Battery',
      description: 'Original replacement battery for iPhone 13 Pro with 3095mAh capacity.',
      price: 2999,
      category: 'Batteries',
      image: '/images/products/iphone-13-pro-battery.jpg',
      stock: 10,
      rating: 4.5,
      reviews: 120,
    },
    user: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      isSeller: false,
      address: {
        street: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        zipCode: '400001',
      },
      phone: '+91 9876543210',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    rating: 5,
    comment: 'Great product! The battery life is amazing and it was easy to install.',
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z',
  },
  {
    id: '2',
    product: {
      id: '2',
      name: 'Samsung Galaxy S21 Screen',
      description: 'Original AMOLED display assembly for Samsung Galaxy S21.',
      price: 8999,
      category: 'Screens',
      image: '/images/products/samsung-s21-screen.jpg',
      stock: 5,
      rating: 4.2,
      reviews: 85,
    },
    user: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      isSeller: false,
      address: {
        street: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        zipCode: '400001',
      },
      phone: '+91 9876543210',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    rating: 4,
    comment: 'Good quality screen, but the installation was a bit tricky.',
    createdAt: '2024-02-05T00:00:00Z',
    updatedAt: '2024-02-05T00:00:00Z',
  },
] 