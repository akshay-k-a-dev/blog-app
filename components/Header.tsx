"use client";

import Link from 'next/link';
import { Search } from 'lucide-react';

interface HeaderProps {
  onSearchChange?: (query: string) => void;
  searchQuery?: string;
}

export function Header({ onSearchChange, searchQuery }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Beyond UI</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              Homepage
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              About us
            </Link>
            <Link 
              href="/features" 
              className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-900 font-medium text-sm"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              Contact us
            </Link>
            <Link 
              href="/demo" 
              className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              Demo
            </Link>
          </nav>

          {/* Search and CTA */}
          <div className="flex items-center space-x-4">
            {onSearchChange && (
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery || ''}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm w-64"
                />
              </div>
            )}
            <Link 
              href="/get-started"
              className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}