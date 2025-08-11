// Mock API data structure based on the Dribbble design
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  publishedAt: string;
  featured: boolean;
  otherFeatured: boolean;
}

// Mock data matching the exact posts from the design
export const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Unlocking Business Efficiency with SaaS Solutions",
    description: "Dive into the world of user interfaces with our experts, latest trends, and practical tips.",
    content: "Full article content about SaaS solutions and business efficiency...",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Business",
    author: {
      name: "Jennifer Taylor",
      avatar: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    readTime: "3 min read",
    publishedAt: "2024-01-15",
    featured: true,
    otherFeatured: false
  },
  {
    id: "2",
    title: "Revolutionizing industries through SaaS implementation",
    description: "Learn how SaaS solutions are transforming traditional business models.",
    content: "Full article content about SaaS implementation...",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Technology",
    author: {
      name: "Michael Chen",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    readTime: "4 min read",
    publishedAt: "2024-01-14",
    featured: false,
    otherFeatured: true
  },
  {
    id: "3",
    title: "Synergizing saas and UX design for delivering digital experiences",
    description: "Discover how to create seamless user experiences in SaaS applications.",
    content: "Full article content about SaaS and UX design synergy...",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Design",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    readTime: "5 min read",
    publishedAt: "2024-01-13",
    featured: false,
    otherFeatured: true
  },
  {
    id: "4",
    title: "Navigating saas waters with intuitive UI and UX",
    description: "Master the art of creating user-friendly SaaS interfaces.",
    content: "Full article content about SaaS UI/UX navigation...",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Design",
    author: {
      name: "David Lee",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    readTime: "6 min read",
    publishedAt: "2024-01-12",
    featured: false,
    otherFeatured: true
  },
  {
    id: "5",
    title: "Sculpting saas success - the art of UI and UX design",
    description: "Learn the principles of successful SaaS design.",
    content: "Full article content about SaaS success through design...",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Design",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    readTime: "4 min read",
    publishedAt: "2024-01-11",
    featured: false,
    otherFeatured: true
  },
  {
    id: "6",
    title: "Transforming saas platforms - a UI/UX design odyssey",
    description: "Journey through the evolution of SaaS platform design.",
    content: "Full article content about SaaS platform transformation...",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Business",
    author: {
      name: "Alex Rodriguez",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    readTime: "7 min read",
    publishedAt: "2024-01-10",
    featured: false,
    otherFeatured: true
  },
  {
    id: "7",
    title: "Mastering UI Elements: A Practical Guide for Designers",
    description: "Dive into the world of user interfaces with our experts, latest trends, and practical tips.",
    content: "Full article content about mastering UI elements...",
    image: "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Design",
    author: {
      name: "Jennifer Taylor",
      avatar: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    readTime: "3 min read",
    publishedAt: "2024-01-09",
    featured: false,
    otherFeatured: false
  },
  {
    id: "8",
    title: "Crafting Seamless Experiences: The Art of Intuitive UI Design",
    description: "Explore the principles and techniques that drive exceptional UI design and user experience in our latest insights.",
    content: "Full article content about crafting seamless experiences...",
    image: "https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Design",
    author: {
      name: "Jennifer Taylor",
      avatar: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    readTime: "3 min read",
    publishedAt: "2024-01-08",
    featured: false,
    otherFeatured: false
  },
  {
    id: "9",
    title: "Beyond Aesthetics: The Power of Emotional UX Design",
    description: "Delve into the realm of emotional design and discover how incorporating empathy and psychology.",
    content: "Full article content about emotional UX design...",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "UX",
    author: {
      name: "Ryan A.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    readTime: "2 min read",
    publishedAt: "2024-01-07",
    featured: false,
    otherFeatured: false
  }
];

// API functions
export async function fetchPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockPosts;
}

export async function fetchPostById(id: string): Promise<BlogPost | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockPosts.find(post => post.id === id) || null;
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  if (!query.trim()) return mockPosts;
  
  return mockPosts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.description.toLowerCase().includes(query.toLowerCase()) ||
    post.category.toLowerCase().includes(query.toLowerCase())
  );
}