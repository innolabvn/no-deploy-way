
import React from 'react';
import Navbar from '@/components/Navbar';
import FeaturedPost from '@/components/FeaturedPost';
import BlogCard from '@/components/BlogCard';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  // Mock data - in a real app, this would come from an API
  const featuredPost = {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies that are reshaping how we build web applications, from AI integration to advanced performance optimization.",
    content: "The web development landscape is evolving at an unprecedented pace...",
    author: "Sarah Johnson",
    publishedAt: "2024-01-20",
    readTime: 8,
    image: "/placeholder.svg",
    category: "Technology",
    tags: ["Web Development", "AI", "Future Tech", "Trends"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring and organizing large-scale React projects that can grow with your team and requirements.",
      author: "Mike Chen",
      publishedAt: "2024-01-18",
      readTime: 12,
      image: "/placeholder.svg",
      category: "Development",
      tags: ["React", "JavaScript", "Architecture", "Best Practices"]
    },
    {
      id: 3,
      title: "Understanding Modern CSS Grid and Flexbox",
      excerpt: "Master the power of CSS Grid and Flexbox to create responsive, maintainable layouts that work across all devices.",
      author: "Emily Rodriguez",
      publishedAt: "2024-01-15",
      readTime: 10,
      image: "/placeholder.svg",
      category: "Design",
      tags: ["CSS", "Layout", "Responsive Design", "Frontend"]
    },
    {
      id: 4,
      title: "API Design Best Practices for Modern Applications",
      excerpt: "Discover how to design robust, scalable APIs that provide excellent developer experience and maintainability.",
      author: "David Kim",
      publishedAt: "2024-01-12",
      readTime: 15,
      image: "/placeholder.svg",
      category: "Backend",
      tags: ["API", "Backend", "REST", "GraphQL"]
    },
    {
      id: 5,
      title: "The Complete Guide to TypeScript",
      excerpt: "Everything you need to know about TypeScript, from basic types to advanced patterns and best practices.",
      author: "Alex Thompson",
      publishedAt: "2024-01-10",
      readTime: 20,
      image: "/placeholder.svg",
      category: "Development",
      tags: ["TypeScript", "JavaScript", "Programming", "Types"]
    },
    {
      id: 6,
      title: "Optimizing Web Performance in 2024",
      excerpt: "Learn the latest techniques and tools for making your web applications lightning-fast and user-friendly.",
      author: "Lisa Wang",
      publishedAt: "2024-01-08",
      readTime: 14,
      image: "/placeholder.svg",
      category: "Performance",
      tags: ["Performance", "Optimization", "Web Vitals", "Speed"]
    },
    {
      id: 7,
      title: "Introduction to Machine Learning for Developers",
      excerpt: "Get started with machine learning concepts and practical implementations that every developer should know.",
      author: "James Wilson",
      publishedAt: "2024-01-05",
      readTime: 18,
      image: "/placeholder.svg",
      category: "AI/ML",
      tags: ["Machine Learning", "AI", "Python", "Data Science"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {/* Hero Section with Featured Post */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FeaturedPost post={featuredPost} />
        </section>

        {/* Latest Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                All
              </button>
              <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                Development
              </button>
              <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                Design
              </button>
              <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                Backend
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold">TechBlog</span>
              </div>
              <p className="text-gray-400 mb-4">
                Discover the latest in technology, development, and design. 
                Join our community of passionate developers and creators.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Backend</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI/ML</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
