# MobileMitra - Mobile Repair Parts & Tools E-commerce Platform

> **Backend Development Credits:** The entire backend infrastructure of this project was developed by **@NavyaGujjeti** (https://github.com/NavyaGujjeti). Her contribution includes the complete Django backend implementation, RESTful API development, database design, and all backend-related functionalities. We extend our sincere gratitude for her exceptional work and dedication to this project.

## 🚀 Project Overview

MobileMitra is a comprehensive e-commerce platform specifically designed for the mobile repair industry in India. It serves as a one-stop solution for:
- Mobile repair technicians
- DIY repair enthusiasts
- Parts suppliers and distributors
- Repair service providers

The platform aims to revolutionize the mobile repair industry by providing:
- Easy access to genuine repair parts
- Comprehensive repair guides
- Quality tools and equipment
- Professional networking opportunities

## ✨ Key Features

### For Customers
- 🛍️ **Product Catalog**
  - Detailed product listings with specifications
  - High-quality product images
  - Compatibility information
  - Price comparison
  - Stock availability

- 🔍 **Advanced Search & Filtering**
  - Search by device model
  - Filter by price range
  - Sort by popularity/price
  - Category-based browsing
  - Brand-specific filtering

- 🛒 **Shopping Experience**
  - Secure checkout process
  - Multiple payment options
  - Order tracking
  - Wishlist functionality
  - Review and rating system

### For Sellers
- 👨‍💼 **Seller Dashboard**
  - Inventory management
  - Order processing
  - Sales analytics
  - Customer management
  - Performance metrics

### For Technicians
- 📚 **Repair Guides**
  - Step-by-step tutorials
  - Video demonstrations
  - Troubleshooting guides
  - Best practices
  - Community forums

## 🛠️ Technical Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React

### Backend (Developed by [@NavyaGujjeti](https://github.com/NavyaGujjeti))
- **Framework**: Django
- **Database**: MySQL
- **API**: RESTful API
- **Authentication**: JWT
- **File Storage**: AWS S3
- **Caching**: Redis
- **Task Queue**: Celery
- **Email Service**: SendGrid
- **Payment Gateway**: Razorpay

## 📋 Prerequisites

### Development Environment
- Node.js 18.x or higher
- npm 9.x or higher
- Python 3.11 or higher
- MySQL 8.0 or higher
- Git
- VS Code (recommended)

### Required Tools
- Git
- VS Code (recommended)
- Postman (for API testing)
- MySQL Workbench
- Redis (for caching)

## 🚀 Getting Started

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/kbmanipoojith/mobilemitra.git
   cd mobilemitra
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration

4. Run the development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Create and activate virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration

5. Run migrations:
   ```bash
   python manage.py migrate
   ```

6. Start the development server:
   ```bash
   python manage.py runserver
   ```

## 🏗️ Project Structure

```
mobilemitra/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   ├── cart/
│   │   │   ├── guides/
│   │   │   ├── products/
│   │   │   └── seller/
│   │   ├── components/
│   │   ├── lib/
│   │   └── types/
│   └── public/
│
├── backend/
│   ├── core/
│   │   ├── settings/
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── apps/
│   │   ├── accounts/
│   │   ├── products/
│   │   ├── orders/
│   │   └── guides/
│   ├── utils/
│   └── requirements.txt
│
└── docs/
```

## 🔧 Development Workflow

### Frontend Development
- Run development server: `npm run dev`
- Run tests: `npm test`
- Run linting: `npm run lint`
- Build for production: `npm run build`

### Backend Development
- Run development server: `python manage.py runserver`
- Run tests: `python manage.py test`
- Create migrations: `python manage.py makemigrations`
- Apply migrations: `python manage.py migrate`

## 📦 Deployment

### Frontend Deployment
1. Build the application:
   ```bash
   npm run build
   ```

2. Test the production build locally:
   ```bash
   npm run start
   ```

3. Deploy to Vercel:
   ```bash
   vercel deploy
   ```

### Backend Deployment
1. Set up production environment variables
2. Install production dependencies
3. Run migrations
4. Configure web server (Nginx)
5. Set up SSL certificates
6. Configure domain and DNS

## 🔐 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### Product Endpoints
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Order Endpoints
- `GET /api/orders` - List user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Django Documentation](https://docs.djangoproject.com)
- [MySQL Documentation](https://dev.mysql.com/doc)

## 📞 Contact

For any queries or support, please contact:
- Frontend Team: [@kbmanipoojith](https://github.com/kbmanipoojith)
- Backend Team: [@NavyaGujjeti](https://github.com/NavyaGujjeti) 
