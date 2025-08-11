"use client";

import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Header } from './Header';
import { FeaturedPost } from './FeaturedPost';
import { OtherFeaturedPosts } from './OtherFeaturedPosts';
import { RecentPosts } from './RecentPosts';
import { BlogPost, fetchPosts } from '@/lib/api';

interface BlogHomePageProps {
  initialPosts: BlogPost[];
}

export function BlogHomePage({ initialPosts }: BlogHomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const { data: posts = initialPosts } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    initialData: initialPosts,
  });

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [posts, searchQuery]);

  // Categorize posts
  const featuredPost = filteredPosts.find(post => post.featured);
  const otherFeaturedPosts = filteredPosts.filter(post => post.otherFeatured);
  const recentPosts = filteredPosts.filter(post => !post.featured && !post.otherFeatured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearchChange={setSearchQuery} searchQuery={searchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {searchQuery && (
          <div className="mb-8">
            <p className="text-gray-600">
              {filteredPosts.length > 0 
                ? `Found ${filteredPosts.length} result${filteredPosts.length !== 1 ? 's' : ''} for "${searchQuery}"`
                : `No results found for "${searchQuery}"`
              }
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - Featured post */}
          <div className="lg:col-span-2">
            {featuredPost ? (
              <FeaturedPost post={featuredPost} />
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center text-gray-500">
                No featured post found
              </div>
            )}
          </div>

          {/* Sidebar - Other featured posts */}
          <div className="lg:col-span-1">
            <OtherFeaturedPosts posts={otherFeaturedPosts} />
          </div>
        </div>

        {/* Recent posts section */}
        <RecentPosts posts={recentPosts} />

        {searchQuery && filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or browse our featured posts above.
              </p>
              <button 
                onClick={() => setSearchQuery('')}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors"
              >
                Clear search
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}