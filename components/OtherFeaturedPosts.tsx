import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/api';

interface OtherFeaturedPostsProps {
  posts: BlogPost[];
}

export function OtherFeaturedPosts({ posts }: OtherFeaturedPostsProps) {
  return (
    <div className="bg-white">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Other featured posts</h2>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/posts/${post.id}`}
            className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex-shrink-0">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors leading-5 mb-1">
                {post.title}
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2 leading-4">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}