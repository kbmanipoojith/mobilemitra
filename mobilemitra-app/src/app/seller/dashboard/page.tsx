'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SellerDashboard() {
  const router = useRouter();

  // TODO: Replace with actual auth check
  useEffect(() => {
    const isAuthenticated = false; // Replace with actual auth check
    const isSeller = false; // Replace with actual seller check
    
    if (!isAuthenticated) {
      router.push('/login?redirect=/seller/dashboard');
    } else if (!isSeller) {
      router.push('/become-seller');
    }
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Seller Dashboard</h1>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Total Products</h3>
          <p className="text-3xl font-bold text-teal-600">0</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <p className="text-3xl font-bold text-teal-600">0</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-teal-600">₹0</p>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Link 
          href="/seller/products/new"
          className="bg-teal-600 text-white p-6 rounded-lg shadow-sm hover:bg-teal-700 transition-colors"
        >
          <h3 className="text-lg font-semibold mb-2">Add New Product</h3>
          <p>List a new product for sale on MobileMitra</p>
        </Link>
        <Link 
          href="/seller/orders"
          className="bg-teal-600 text-white p-6 rounded-lg shadow-sm hover:bg-teal-700 transition-colors"
        >
          <h3 className="text-lg font-semibold mb-2">Manage Orders</h3>
          <p>View and manage your pending orders</p>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="text-center py-8 text-gray-500">
          No recent activity to display
        </div>
      </div>
    </div>
  );
} 