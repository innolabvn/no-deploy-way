
import { Clock, User, ArrowRight, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SocialShare from "@/components/SocialShare";

interface FeaturedPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  image: string;
  category: string;
  tags: string[];
}

interface FeaturedPostProps {
  post: FeaturedPostData;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white mb-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <Badge className="bg-white/20 text-white hover:bg-white/30">
              Featured
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30">
              {post.category}
            </Badge>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            {post.title}
          </h2>
          
          <p className="text-lg text-blue-100 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-blue-200">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 pt-4">
            <Link to={`/post/${post.id}`}>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            
            <SocialShare 
              url={`https://techblog.pro/post/${post.id}`}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        </div>
        
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 lg:h-full object-cover rounded-xl shadow-2xl"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
