export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  priceRange: {
    min: number;
    max: number;
  };
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'batteries',
    name: 'Batteries',
    slug: 'batteries',
    description: 'High-quality replacement batteries with optimal performance and longevity',
    image: '/images/categories/batteries.jpg',
    priceRange: {
      min: 999,
      max: 3999
    },
    subcategories: [
      {
        id: 'original-batteries',
        name: 'Original Batteries',
        slug: 'original-batteries',
        description: 'Genuine OEM batteries from manufacturers'
      },
      {
        id: 'compatible-batteries',
        name: 'Compatible Batteries',
        slug: 'compatible-batteries',
        description: 'High-quality compatible replacement batteries'
      }
    ]
  },
  {
    id: 'displays',
    name: 'Displays',
    slug: 'displays',
    description: 'Premium quality display replacements with perfect color accuracy and touch response',
    image: '/images/categories/displays.jpg',
    priceRange: {
      min: 2999,
      max: 24999
    },
    subcategories: [
      {
        id: 'lcd-displays',
        name: 'LCD Displays',
        slug: 'lcd-displays',
        description: 'LCD display assemblies with touch screen'
      },
      {
        id: 'oled-displays',
        name: 'OLED Displays',
        slug: 'oled-displays',
        description: 'OLED and AMOLED display assemblies'
      },
      {
        id: 'touch-screens',
        name: 'Touch Screens',
        slug: 'touch-screens',
        description: 'Touch screen digitizers and glass'
      }
    ]
  },
  {
    id: 'charging-parts',
    name: 'Charging Parts',
    slug: 'charging-parts',
    description: 'Genuine charging components for reliable charging and data transfer',
    image: '/images/categories/charging-parts.jpg',
    priceRange: {
      min: 499,
      max: 1999
    },
    subcategories: [
      {
        id: 'charging-ports',
        name: 'Charging Ports',
        slug: 'charging-ports',
        description: 'USB and Lightning charging port assemblies'
      },
      {
        id: 'charging-flex-cables',
        name: 'Charging Flex Cables',
        slug: 'charging-flex-cables',
        description: 'Charging port flex cables'
      }
    ]
  },
  {
    id: 'camera-parts',
    name: 'Camera Parts',
    slug: 'camera-parts',
    description: 'High-quality camera modules and components',
    image: '/images/categories/camera-parts.jpg',
    priceRange: {
      min: 1499,
      max: 12999
    },
    subcategories: [
      {
        id: 'front-cameras',
        name: 'Front Cameras',
        slug: 'front-cameras',
        description: 'Front-facing camera modules'
      },
      {
        id: 'rear-cameras',
        name: 'Rear Cameras',
        slug: 'rear-cameras',
        description: 'Rear camera modules and assemblies'
      },
      {
        id: 'camera-lenses',
        name: 'Camera Lenses',
        slug: 'camera-lenses',
        description: 'Camera lens replacements'
      }
    ]
  }
]; 