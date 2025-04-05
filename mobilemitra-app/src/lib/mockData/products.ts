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
    discount: 10,
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
    discount: 15,
  },
  {
    id: '4',
    name: 'OnePlus 9 Pro Back Glass',
    description: 'Original back glass panel for OnePlus 9 Pro in matte black.',
    price: 1999,
    category: 'Back Panels',
    image: '/images/products/oneplus-9-pro-back.jpg',
    stock: 8,
    rating: 4.7,
    reviews: 42,
  },
  {
    id: '5',
    name: 'Xiaomi Redmi Note 10 LCD',
    description: 'Full LCD display assembly for Xiaomi Redmi Note 10.',
    price: 2499,
    category: 'Screens',
    image: '/images/products/redmi-note-10-lcd.jpg',
    stock: 12,
    rating: 4.3,
    reviews: 78,
    discount: 8,
  },
  {
    id: '6',
    name: 'Professional Repair Toolkit',
    description: 'Complete toolkit with 24 precision screwdrivers and opening tools.',
    price: 1299,
    category: 'Tools',
    image: '/images/products/repair-toolkit.jpg',
    stock: 20,
    rating: 4.8,
    reviews: 156,
  },
  {
    id: '7',
    name: 'iPhone 11 Loudspeaker',
    description: 'Original loudspeaker replacement for iPhone 11.',
    price: 899,
    category: 'Audio Parts',
    image: '/images/products/iphone-11-speaker.jpg',
    stock: 18,
    rating: 4.1,
    reviews: 37,
    discount: 12,
  },
  {
    id: '8',
    name: 'Samsung Galaxy A52 Camera Module',
    description: 'Original rear camera module for Samsung Galaxy A52.',
    price: 2799,
    category: 'Camera Parts',
    image: '/images/products/samsung-a52-camera.jpg',
    stock: 7,
    rating: 4.4,
    reviews: 29,
  },
];