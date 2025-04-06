import { brands } from './brands';
import { categories } from './categories';
import { Product, generateProductId } from './products';

const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomRating = (): number => {
  return Number((3.5 + Math.random() * 1.5).toFixed(1));
};

const generateRandomReviews = (): number => {
  return generateRandomNumber(20, 200);
};

const generateRandomStock = (): number => {
  return generateRandomNumber(0, 50);
};

const generateRandomDiscount = (): number | undefined => {
  return Math.random() < 0.3 ? generateRandomNumber(5, 20) : undefined;
};

export const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let count = 0;

  brands.forEach(brand => {
    brand.models.forEach(model => {
      categories.forEach(category => {
        const { priceRange } = category;
        const price = generateRandomNumber(priceRange.min, priceRange.max);

        // Generate a product for each subcategory if they exist
        if (category.subcategories && category.subcategories.length > 0) {
          category.subcategories.forEach(subcategory => {
            count++;
            products.push({
              id: generateProductId(brand.id, model.id, subcategory.id),
              name: `${brand.name} ${model.name} ${subcategory.name}`,
              slug: `${brand.slug}-${model.slug}-${subcategory.slug}`,
              description: `${subcategory.description} for ${brand.name} ${model.name}`,
              price,
              stock: generateRandomStock(),
              image: `/images/products/${brand.slug}/${model.slug}/${subcategory.slug}.jpg`,
              rating: generateRandomRating(),
              reviews: generateRandomReviews(),
              discount: generateRandomDiscount(),
              brand,
              model,
              category,
              subcategory,
              compatibility: [model.name],
              specifications: {
                'Brand': brand.name,
                'Model': model.name,
                'Category': category.name,
                'Subcategory': subcategory.name,
                'Release Year': model.releaseYear,
                'Series': model.series || 'N/A'
              }
            });
          });
        } else {
          // Generate a product without subcategory
          count++;
          products.push({
            id: generateProductId(brand.id, model.id, category.id),
            name: `${brand.name} ${model.name} ${category.name}`,
            slug: `${brand.slug}-${model.slug}-${category.slug}`,
            description: `${category.description} for ${brand.name} ${model.name}`,
            price,
            stock: generateRandomStock(),
            image: `/images/products/${brand.slug}/${model.slug}/${category.slug}.jpg`,
            rating: generateRandomRating(),
            reviews: generateRandomReviews(),
            discount: generateRandomDiscount(),
            brand,
            model,
            category,
            compatibility: [model.name],
            specifications: {
              'Brand': brand.name,
              'Model': model.name,
              'Category': category.name,
              'Release Year': model.releaseYear,
              'Series': model.series || 'N/A'
            }
          });
        }
      });
    });
  });

  console.log(`Generated ${count} products`);
  return products;
}; 