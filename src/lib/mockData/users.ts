export interface User {
  id: string
  name: string
  email: string
  password: string
  isSeller: boolean
  address?: {
    street: string
    city: string
    state: string
    country: string
    zipCode: string
  }
  phone?: string
  createdAt: string
  updatedAt: string
}

export const users: User[] = [
  {
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
  {
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
] 