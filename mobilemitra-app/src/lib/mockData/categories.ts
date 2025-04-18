export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Batteries',
    slug: 'batteries',
    description: 'Original and high-quality replacement batteries for all major smartphone brands.',
    image: '/images/categories/batteries.jpg',
  },
  {
    id: '2',
    name: 'Screens',
    slug: 'screens',
    description: 'Original and aftermarket display assemblies for various smartphone models.',
    image: '/images/categories/screens.jpg',
  },
  {
    id: '3',
    name: 'Charging Ports',
    slug: 'charging-ports',
    description: 'Original charging port flex cables and assemblies for different devices.',
    image: '/images/categories/charging-ports.jpg',
  },
  {
    id: '4',
    name: 'Back Panels',
    slug: 'back-panels',
    description: 'Replacement back glass panels and covers for smartphones.',
    image: '/images/categories/back-panels.jpg',
  },
  {
    id: '5',
    name: 'Camera Parts',
    slug: 'camera-parts',
    description: 'Camera modules, lenses and flex cables for smartphone repairs.',
    image: '/images/categories/camera-parts.jpg',
  },
  {
    id: '6',
    name: 'Tools',
    slug: 'tools',
    description: 'Professional repair tools, kits and equipment for mobile technicians.',
    image: '/images/categories/tools.jpg',
  },
];