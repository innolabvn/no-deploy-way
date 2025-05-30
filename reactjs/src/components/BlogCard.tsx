
import { Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: number;
  image: string;
  category: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link to={`/post/${post.id}`} className="block">
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-white cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-blue-600 text-white hover:bg-blue-700">
              {post.category}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{post.tags.length - 2}
              </Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="text-xs text-slate-400 mt-2 w-full">
            {formatDate(post.publishedAt)}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
