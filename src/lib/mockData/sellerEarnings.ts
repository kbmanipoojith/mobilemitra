import { User } from './users'

export interface SellerEarning {
  id: string
  seller: User
  month: string
  year: number
  totalSales: number
  totalOrders: number
  totalCommission: number
  totalEarnings: number
  createdAt: string
  updatedAt: string
}

export const sellerEarnings: SellerEarning[] = [
  {
    id: '1',
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
    month: 'January',
    year: 2024,
    totalSales: 2999,
    totalOrders: 1,
    totalCommission: 299.9,
    totalEarnings: 2699.1,
    createdAt: '2024-01-31T00:00:00Z',
    updatedAt: '2024-01-31T00:00:00Z',
  },
  {
    id: '2',
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
    month: 'February',
    year: 2024,
    totalSales: 8999,
    totalOrders: 1,
    totalCommission: 899.9,
    totalEarnings: 8099.1,
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-02-01T00:00:00Z',
  },
] 