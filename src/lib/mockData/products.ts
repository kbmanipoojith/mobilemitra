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
}

export const products: Product[] = [
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
  },
  {
    id: '3',
    name: 'iPhone 12 Charging Port',
    description: 'Original charging port flex cable for iPhone 12 series.',
    price: 1499,
    category: 'Charging Ports',
    image: '/images/products/iphone-12-charging-port.jpg',
    stock: 15,
    rating: 4.0,
    reviews: 65,
  },
  {
    id: '4',
    name: 'OnePlus 9 Pro Back Glass',
    description: 'Original back glass panel for OnePlus 9 Pro in matte black.',
    price: 2499,
    category: 'Back Glass',
    image: '/images/products/oneplus-9-pro-back-glass.jpg',
    stock: 8,
    rating: 4.3,
    reviews: 45,
  },
  {
    id: '5',
    name: 'Xiaomi Mi 11 Camera Module',
    description: 'Original camera module for Xiaomi Mi 11 with 108MP main sensor.',
    price: 4999,
    category: 'Cameras',
    image: '/images/products/xiaomi-mi-11-camera.jpg',
    stock: 3,
    rating: 4.7,
    reviews: 30,
  },
  {
    id: '6',
    name: 'iPhone 13 Pro Max Logic Board',
    description: 'Original logic board for iPhone 13 Pro Max with A15 Bionic chip.',
    price: 24999,
    category: 'Logic Boards',
    image: '/images/products/iphone-13-pro-max-logic-board.jpg',
    stock: 2,
    rating: 4.8,
    reviews: 15,
  },
]; 