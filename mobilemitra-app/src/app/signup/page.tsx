'use client';

import Link from 'next/link';

export default function SignupSelectionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Choose your account type
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Link
            href="/signup/user"
            className="relative block w-full group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Customer Account
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Buy mobile repair parts and access repair guides
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-500 rounded-lg transition-colors" />
            </div>
          </Link>

          <Link
            href="/signup/seller"
            className="relative block w-full group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Seller Account
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                List and sell mobile repair parts on our platform
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-500 rounded-lg transition-colors" />
            </div>
          </Link>
        </div>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
} 