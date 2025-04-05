'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// TODO: Replace with actual cart management
const initialCart: CartItem[] = [
  // Example cart item structure
  // {
  //   id: 1,
  //   name: 'iPhone 12 Battery',
  //   price: 1999,
  //   quantity: 1,
  //   image: '/images/products/iphone-12-battery.jpg'
  // }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const updateQuantity = (itemId: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };

  const removeItem = (itemId: number) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Your cart is empty</p>
          <Link 
            href="/products" 
            className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-teal-600">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
          <button 
            className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition-colors"
            onClick={() => {/* TODO: Implement checkout */}}
          >
            Proceed to Checkout
          </button>
          {shipping > 0 && (
            <p className="text-sm text-gray-500 mt-4">
              Free shipping on orders above ₹999
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 