import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { fetchPostById, fetchPosts } from '@/lib/api';
import { Header } from '@/components/Header';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await fetchPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blog
          </Link>

          <div className="mb-6">
            <span className="inline-block bg-gray-900 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="flex items-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="text-sm">{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-8 mb-8">
            {post.description}
          </p>
          
          <div className="text-gray-800 leading-relaxed space-y-6">
            <p>
              {post.content}
            </p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
            
            <ul className="space-y-2">
              <li>Understanding the fundamentals of modern design principles</li>
              <li>Implementing user-centered design methodologies</li>
              <li>Leveraging technology for better user experiences</li>
              <li>Measuring success through analytics and user feedback</li>
            </ul>
            
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
            
            <p>
              In conclusion, the principles discussed in this article provide a solid foundation for creating exceptional user experiences. By following these guidelines and continuously iterating based on user feedback, designers and developers can build products that truly resonate with their audience.
            </p>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              <p className="text-gray-600 text-sm">Author</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const posts = await fetchPosts();
  
  return posts.map((post) => ({
    id: post.id,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: PostPageProps) {
  const post = await fetchPostById(params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Beyond UI Blog`,
    description: post.description,
    keywords: [post.category.toLowerCase(), 'UI design', 'UX design', 'blog'],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      authors: [post.author.name],
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}