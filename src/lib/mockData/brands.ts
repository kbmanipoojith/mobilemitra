export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  models: Model[];
}

export interface Model {
  id: string;
  name: string;
  slug: string;
  image: string;
  releaseYear: number;
  series?: string;
}

export const brands: Brand[] = [
  {
    id: 'samsung',
    name: 'Samsung',
    slug: 'samsung',
    logo: '/images/brands/samsung.png',
    models: [
      {
        id: 'galaxy-s23-ultra',
        name: 'Galaxy S23 Ultra',
        slug: 'galaxy-s23-ultra',
        image: '/images/models/samsung/galaxy-s23-ultra.png',
        releaseYear: 2023,
        series: 'S Series'
      },
      {
        id: 'galaxy-s23-plus',
        name: 'Galaxy S23+',
        slug: 'galaxy-s23-plus',
        image: '/images/models/samsung/galaxy-s23-plus.png',
        releaseYear: 2023,
        series: 'S Series'
      },
      // Add more models...
    ]
  },
  {
    id: 'apple',
    name: 'Apple',
    slug: 'apple',
    logo: '/images/brands/apple.png',
    models: [
      {
        id: 'iphone-15-pro-max',
        name: 'iPhone 15 Pro Max',
        slug: 'iphone-15-pro-max',
        image: '/images/models/apple/iphone-15-pro-max.png',
        releaseYear: 2023,
        series: 'iPhone 15'
      },
      {
        id: 'iphone-15-pro',
        name: 'iPhone 15 Pro',
        slug: 'iphone-15-pro',
        image: '/images/models/apple/iphone-15-pro.png',
        releaseYear: 2023,
        series: 'iPhone 15'
      },
      // Add more models...
    ]
  },
  // Add more brands...
]; 