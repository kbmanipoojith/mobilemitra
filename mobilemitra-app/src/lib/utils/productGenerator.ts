import { Product } from '../mockData/products';

const BRANDS = [
  'Samsung', 'Apple', 'Xiaomi', 'OnePlus', 'Vivo', 'Oppo', 'Realme',
  'Motorola', 'Nokia', 'Google', 'Nothing', 'iQOO', 'Poco'
];

const MODELS = {
  Samsung: ['S23 Ultra', 'S23+', 'S23', 'S22 Ultra', 'S22+', 'S22', 'A73', 'A53', 'M53', 'M33'],
  Apple: ['iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14', 'iPhone 13 Pro Max', 'iPhone 13'],
  Xiaomi: ['13 Pro', '13', '12 Pro', '12', 'Redmi Note 12 Pro+', 'Redmi Note 12 Pro', 'POCO F5'],
  OnePlus: ['11 5G', '10 Pro', '10T', '10R', 'Nord 3', 'Nord CE 3', 'Nord N30'],
  Vivo: ['X90 Pro', 'X90', 'V27 Pro', 'V27', 'T2 5G', 'Y100', 'Y35'],
  Oppo: ['Find X6 Pro', 'Find X6', 'Reno 8 Pro', 'Reno 8', 'F23', 'A78', 'A77'],
  Realme: ['GT Neo 5', 'GT 3', '10 Pro+', '10 Pro', 'Narzo 60 Pro', 'C55', 'C33'],
  Motorola: ['Edge 40 Pro', 'Edge 40', 'G73 5G', 'G53 5G', 'G23', 'E13', 'E10'],
  Nokia: ['X30 5G', 'G60 5G', 'G21', 'G11', 'C32', 'C22', 'C12'],
  Google: ['Pixel 7 Pro', 'Pixel 7', 'Pixel 6a', 'Pixel 6', 'Pixel 5', 'Pixel 4a'],
  Nothing: ['Phone (2)', 'Phone (1)'],
  iQOO: ['11 5G', 'Neo 7', 'Z7', 'Z6', 'Z6 Lite'],
  Poco: ['F5 Pro', 'F5', 'X5 Pro', 'X5', 'M5', 'C55']
};

const PARTS = [
  { category: 'Batteries', priceRange: { min: 999, max: 3999 } },
  { category: 'Screens', priceRange: { min: 2999, max: 12999 } },
  { category: 'Charging Ports', priceRange: { min: 499, max: 1999 } },
  { category: 'Back Panels', priceRange: { min: 999, max: 3999 } },
  { category: 'Speakers', priceRange: { min: 399, max: 1499 } },
  { category: 'Cameras', priceRange: { min: 1999, max: 7999 } },
  { category: 'Motherboards', priceRange: { min: 3999, max: 15999 } },
  { category: 'Power Buttons', priceRange: { min: 299, max: 999 } },
  { category: 'Volume Buttons', priceRange: { min: 299, max: 999 } }
];

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomPrice(min: number, max: number): number {
  const price = Math.round(getRandomInt(min, max) / 100) * 100; // Round to nearest 100
  return price;
}

function generateRandomRating(): number {
  return Number((3.5 + Math.random() * 1.5).toFixed(1)); // Generates rating between 3.5 and 5.0
}

function generateRandomStock(): number {
  return getRandomInt(5, 50);
}

function generateRandomReviews(): number {
  return getRandomInt(10, 200);
}

function generateRandomDiscount(): number | undefined {
  return Math.random() < 0.3 ? getRandomInt(5, 20) : undefined; // 30% chance of discount
}

export function generateProducts(count: number = 3000): Product[] {
  const products: Product[] = [];
  let id = 1;

  while (products.length < count) {
    for (const brand of BRANDS) {
      const models = MODELS[brand as keyof typeof MODELS];
      
      for (const model of models) {
        for (const part of PARTS) {
          if (products.length >= count) break;

          const { min, max } = part.priceRange;
          const price = generateRandomPrice(min, max);

          products.push({
            id: String(id++),
            name: `${brand} ${model} ${part.category.slice(0, -1)}`, // Remove 's' from category
            description: `Original replacement ${part.category.toLowerCase().slice(0, -1)} for ${brand} ${model}.`,
            price,
            category: part.category,
            image: `/images/products/${brand.toLowerCase()}-${model.toLowerCase().replace(/ /g, '-')}-${part.category.toLowerCase().slice(0, -1)}.jpg`,
            stock: generateRandomStock(),
            rating: generateRandomRating(),
            reviews: generateRandomReviews(),
            discount: generateRandomDiscount()
          });
        }
      }
    }
  }

  return products.slice(0, count);
}