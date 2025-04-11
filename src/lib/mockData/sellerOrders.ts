import { Order } from './orders'
import { User } from './users'

export interface SellerOrder extends Order {
  seller: User
  commission: number
  shippingStatus: 'Pending' | 'Shipped' | 'Delivered' | 'Returned'
  trackingNumber?: string
}

export const sellerOrders: SellerOrder[] = [
  {
    id: '1',
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
    items: [
      {
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
        quantity: 1,
        price: 2999,
      },
    ],
    total: 2999,
    status: 'Delivered',
    shippingAddress: {
      street: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      zipCode: '400001',
    },
    paymentMethod: 'UPI',
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z',
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
    commission: 299.9,
    shippingStatus: 'Delivered',
    trackingNumber: 'TRK123456789',
  },
  {
    id: '2',
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
    items: [
      {
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
        quantity: 1,
        price: 8999,
      },
    ],
    total: 8999,
    status: 'Processing',
    shippingAddress: {
      street: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      zipCode: '400001',
    },
    paymentMethod: 'Credit Card',
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-02-01T00:00:00Z',
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
    commission: 899.9,
    shippingStatus: 'Pending',
  },
] 