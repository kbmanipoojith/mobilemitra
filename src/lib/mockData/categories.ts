export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
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
    name: 'Back Glass',
    slug: 'back-glass',
    description: 'Original back glass panels and housings for various smartphone models.',
    image: '/images/categories/back-glass.jpg',
  },
  {
    id: '5',
    name: 'Cameras',
    slug: 'cameras',
    description: 'Original camera modules and lenses for different smartphone models.',
    image: '/images/categories/cameras.jpg',
  },
  {
    id: '6',
    name: 'Logic Boards',
    slug: 'logic-boards',
    description: 'Original logic boards and mainboards for various smartphone models.',
    image: '/images/categories/logic-boards.jpg',
  },
] 