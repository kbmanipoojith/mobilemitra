import { Product } from './products'

export interface CartItem {
  product: Product
  quantity: number
}

export const cartItems: CartItem[] = [
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
  },
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
  },
] 