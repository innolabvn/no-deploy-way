
import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="mt-16">
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              You're All Set!
            </h3>
            <p className="text-green-700 mb-4">
              Thank you for subscribing to our newsletter. You'll receive our latest articles and insights directly in your inbox.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSubscribed(false)}
              className="border-green-300 text-green-700 hover:bg-green-100"
            >
              Subscribe Another Email
            </Button>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-0 overflow-hidden">
        <CardContent className="relative py-12 px-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative text-center max-w-2xl mx-auto">
            <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
            <h3 className="text-3xl font-bold mb-4">
              Stay Ahead of the Curve
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get the latest articles, tutorials, and industry insights delivered straight to your inbox. Join 50,000+ developers who trust our content.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20 focus:border-white/40"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-xs text-blue-200 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Newsletter;
