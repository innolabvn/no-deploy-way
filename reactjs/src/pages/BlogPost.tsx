import { useState } from "react";
import { ArrowLeft, Clock, User, Share2, Heart, MessageCircle, Bookmark, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SocialShare from "@/components/SocialShare";
import BlogCard from "@/components/BlogCard";
import { useNavigate } from "react-router-dom";

// Mock data for the blog post
const blogPost = {
  id: 1,
  title: "Building High-Performance Web Applications in 2025",
  excerpt: "Learn the latest techniques and best practices for creating lightning-fast web applications that scale.",
  content: `
    <p>In today's digital landscape, performance is not just a nice-to-have feature—it's essential for user engagement and business success. This comprehensive guide will walk you through the most effective strategies for building high-performance web applications in 2025.</p>

    <h2>Understanding Performance Fundamentals</h2>
    <p>Performance optimization begins with understanding the key metrics that matter most to your users. Core Web Vitals, introduced by Google, provide a standardized way to measure user experience:</p>
    
    <ul>
      <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance</li>
      <li><strong>First Input Delay (FID):</strong> Measures interactivity</li>
      <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability</li>
    </ul>

    <h2>Modern Frontend Optimization Techniques</h2>
    <p>The frontend landscape has evolved significantly, offering new opportunities for optimization:</p>

    <h3>1. Bundle Splitting and Code Splitting</h3>
    <p>Modern bundlers like Vite and Webpack 5 provide advanced code splitting capabilities. By implementing route-based and component-based splitting, you can reduce initial bundle sizes by up to 60%.</p>

    <h3>2. Image Optimization</h3>
    <p>Images often account for the largest portion of page weight. Implementing modern formats like WebP and AVIF, along with responsive images and lazy loading, can dramatically improve load times.</p>

    <h3>3. Caching Strategies</h3>
    <p>Effective caching strategies involve multiple layers: browser caching, CDN caching, and application-level caching. Service workers enable sophisticated offline-first experiences.</p>

    <h2>Backend Performance Considerations</h2>
    <p>While frontend optimizations are crucial, backend performance is equally important for creating fast web applications.</p>

    <h3>Database Optimization</h3>
    <p>Query optimization, proper indexing, and connection pooling can reduce database response times by orders of magnitude. Consider implementing read replicas for read-heavy applications.</p>

    <h3>API Design</h3>
    <p>RESTful APIs and GraphQL each have their place in modern applications. GraphQL excels at reducing over-fetching, while well-designed REST APIs remain simple and cacheable.</p>

    <h2>Monitoring and Measurement</h2>
    <p>You can't optimize what you don't measure. Implementing comprehensive monitoring solutions helps identify performance bottlenecks before they impact users.</p>

    <p>Tools like Lighthouse, WebPageTest, and Real User Monitoring (RUM) provide different perspectives on application performance. Regular performance audits should be part of your development workflow.</p>

    <h2>Conclusion</h2>
    <p>Building high-performance web applications requires a holistic approach that considers frontend optimization, backend efficiency, and continuous monitoring. By implementing these strategies, you can create applications that not only meet user expectations but exceed them.</p>

    <p>Remember: performance is a journey, not a destination. Stay updated with the latest best practices and continuously measure and optimize your applications.</p>
  `,
  author: "Alex Thompson",
  publishedAt: "2025-01-15",
  readTime: 8,
  image: "/placeholder.svg",
  category: "Development",
  tags: ["React", "Performance", "Web Development", "Optimization", "JavaScript"]
};

// Related posts mock data
const relatedPosts = [
  {
    id: 2,
    title: "Optimizing Core Web Vitals for Better SEO",
    excerpt: "A comprehensive guide to improving your website's Core Web Vitals and search rankings.",
    author: "Michael Rodriguez",
    publishedAt: "2025-01-10",
    readTime: 12,
    image: "/placeholder.svg",
    category: "SEO",
    tags: ["SEO", "Performance", "Analytics"]
  },
  {
    id: 3,
    title: "The Future of Frontend Development",
    excerpt: "Exploring emerging trends and technologies shaping the future of web development.",
    author: "Sarah Chen",
    publishedAt: "2025-01-12",
    readTime: 6,
    image: "/placeholder.svg",
    category: "Technology",
    tags: ["Frontend", "Trends", "Innovation"]
  }
];

const BlogPost = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(42);
  const navigate = useNavigate();

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleBackToBlog = () => {
    navigate('/');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600"
              onClick={handleBackToBlog}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
            
            <div className="flex items-center gap-4">
              <SocialShare 
                url={`https://techblog.pro/post/${blogPost.id}`}
                title={blogPost.title}
                excerpt={blogPost.excerpt}
              />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "text-blue-600" : "text-slate-600"}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-96">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <Badge className="bg-blue-600 text-white mb-4">
                {blogPost.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {blogPost.title}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Article Meta */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200">
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime} min read</span>
                </div>
                <span>{formatDate(blogPost.publishedAt)}</span>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className={`flex items-center gap-2 ${isLiked ? "text-red-600" : "text-slate-600"}`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                  {likes}
                </Button>
                
                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-slate-600">
                  <MessageCircle className="w-4 h-4" />
                  23
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-h2:text-2xl prose-h3:text-xl"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    onClick={handleLike}
                    className={`flex items-center gap-2 ${
                      isLiked 
                        ? "bg-red-50 text-red-600 hover:bg-red-100 border-red-200" 
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200"
                    }`}
                    variant="outline"
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                    {isLiked ? "Liked" : "Like"} ({likes})
                  </Button>
                  
                  <SocialShare 
                    url={`https://techblog.pro/post/${blogPost.id}`}
                    title={blogPost.title}
                    excerpt={blogPost.excerpt}
                  />
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={isBookmarked ? "bg-blue-50 text-blue-600 border-blue-200" : ""}
                >
                  <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? "fill-current" : ""}`} />
                  {isBookmarked ? "Bookmarked" : "Bookmark"}
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPost;
