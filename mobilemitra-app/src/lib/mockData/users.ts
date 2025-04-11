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
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    name: 'Regular User',
    email: 'test@gmail.com',
    password: 'test',
    isSeller: false,
    address: {
      street: '789 Test St',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      zipCode: '560001',
    },
    phone: '+91 9876543212',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '4',
    name: 'Seller User',
    email: 'test@gmail.com',
    password: 'test',
    isSeller: true,
    address: {
      street: '101 Seller St',
      city: 'Chennai',
      state: 'Tamil Nadu',
      country: 'India',
      zipCode: '600001',
    },
    phone: '+91 9876543213',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  }
];