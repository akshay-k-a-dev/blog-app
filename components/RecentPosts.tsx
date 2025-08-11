import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/api';

interface RecentPostsProps {
  posts: BlogPost[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Recent Posts</h2>
        <Link 
          href="/posts" 
          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          All Posts
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white group">
            <Link href={`/posts/${post.id}`}>
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors leading-6">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-5 line-clamp-2">
                  {post.description}
                </p>
                
                <div className="flex items-center space-x-3 pt-2">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                        sizes="24px"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {post.author.name}
                    </span>
                  </div>
                  
                  <span className="text-gray-400">•</span>
                  
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}