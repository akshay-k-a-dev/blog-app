import Link from 'next/link';
import { Header } from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page not found</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. The post might have been moved or deleted.
            </p>
          </div>
          
          <div className="space-x-4">
            <Link 
              href="/"
              className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Back to homepage
            </Link>
            <Link 
              href="/posts"
              className="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              View all posts
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}