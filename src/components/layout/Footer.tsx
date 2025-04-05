import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About MobileMitra</h3>
            <p className="text-gray-600">
              Your trusted partner for mobile repair parts and tools in India.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-primary-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-600 hover:text-primary-600">
                  Repair Guides
                </Link>
              </li>
              <li>
                <Link href="/seller/dashboard" className="text-gray-600 hover:text-primary-600">
                  Become a Seller
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">Email: support@mobilemitra.com</p>
            <p className="text-gray-600">Phone: +91 1234567890</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} MobileMitra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 