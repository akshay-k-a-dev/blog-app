import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/api';

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative bg-gray-900 rounded-2xl overflow-hidden h-80 lg:h-96">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      
      <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
        <div className="mb-4">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4 max-w-lg">
          {post.title}
        </h1>
        
        <Link 
          href={`/posts/${post.id}`}
          className="inline-flex items-center text-white font-medium hover:text-gray-200 transition-colors group"
        >
          Read more
          <svg 
            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}