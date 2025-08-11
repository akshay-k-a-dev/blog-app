import Link from 'next/link';
import { Header } from '@/components/Header';

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get Started with Beyond UI</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your digital experiences? Let's begin your journey with our comprehensive UI/UX solutions.
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}