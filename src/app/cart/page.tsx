'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { products } from '@/lib/mockData/products';

interface CartItem {
  productId: number;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.productId !== productId)
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const handleCheckout = async () => {
    setIsCheckoutLoading(true);
    try {
      // TODO: Implement actual checkout logic with backend
      console.log('Checkout items:', cartItems);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear cart after successful checkout
      setCartItems([]);
      localStorage.removeItem('cart');
      
      alert('Order placed successfully!');
    } catch (error) {
      alert('Failed to place order. Please try again.');
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {cartItems.map(item => {
              const product = products.find(p => p.id === item.productId);
              if (!product) return null;

              return (
                <div key={product.id} className="border-b last:border-b-0">
                  <div className="p-4 flex items-center">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                      <p className="text-blue-600 font-bold">₹{product.price.toLocaleString('en-IN')}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l"
                        >
                          -
                        </button>
                        <span className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="ml-4 text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₹{getCartTotal().toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold text-blue-600">
                    ₹{getCartTotal().toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isCheckoutLoading}
                className={`w-full py-3 px-4 rounded-md text-white font-semibold ${
                  isCheckoutLoading
                    ? 'bg-blue-400'
                    : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors`}
              >
                {isCheckoutLoading ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 