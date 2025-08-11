import { Suspense } from 'react';
import { BlogHomePage } from '@/components/BlogHomePage';
import { fetchPosts } from '@/lib/api';

// Enable SSR for the homepage
export default async function Home() {
  // Server-side data fetching
  const posts = await fetchPosts();
  
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 animate-pulse" />}>
      <BlogHomePage initialPosts={posts} />
    </Suspense>
  );
}

// SEO optimization
export async function generateMetadata() {
  return {
    title: 'Beyond UI - Latest Design Insights & SaaS Solutions',
    description: 'Discover cutting-edge UI/UX design principles, SaaS implementation strategies, and digital transformation insights from Beyond UI experts.',
    keywords: ['UI design', 'UX design', 'SaaS solutions', 'digital experiences', 'business efficiency', 'design systems'],
    openGraph: {
      title: 'Beyond UI - Latest Design Insights & SaaS Solutions',
      description: 'Discover cutting-edge UI/UX design principles and SaaS implementation strategies.',
      type: 'website',
      images: [
        {
          url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
          width: 1200,
          height: 630,
          alt: 'Beyond UI Blog',
        },
      ],
    },
  };
}