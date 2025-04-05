# MobileMitra - Mobile Repair Parts & Tools E-commerce Platform

MobileMitra is a modern e-commerce platform built with Next.js and Tailwind CSS, focused on providing mobile repair parts, tools, and repair guides for technicians and enthusiasts in India.

## Features

- 🛍️ Product Catalog with Categories
- 🔍 Search and Filter Products
- 🛒 Shopping Cart with Checkout
- 👤 User Authentication
- 👨‍💼 Seller Dashboard
- 📚 Repair Guides
- 📱 Fully Responsive Design

## Tech Stack

- **Frontend:**
  - Next.js 14 (App Router)
  - React 18
  - TypeScript
  - Tailwind CSS
  - Local Storage for Cart Management

- **Backend Integration (Future):**
  - Django
  - MySQL
  - RESTful API

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mobilemitra.git
   cd mobilemitra
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mobilemitra/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── cart/
│   │   ├── guides/
│   │   ├── products/
│   │   ├── seller/
│   │   │   └── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── product/
│   │   ├── auth/
│   │   ├── seller/
│   │   └── cart/
│   ├── lib/
│   │   └── mockData/
│   └── types/
├── public/
└── package.json
```

## API Routes (Future Integration)

- `GET /api/products` - Fetch all products
- `POST /api/signup` - Register a user
- `POST /api/login` - Authenticate a user
- `POST /api/upload` - Submit seller product data
- `POST /api/cart` - Update cart
- `GET /api/guides` - Fetch repair guides

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev) 