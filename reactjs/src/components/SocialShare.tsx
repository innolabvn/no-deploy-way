
import { useState } from "react";
import { Share2, Facebook, Linkedin, Twitter, Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";

interface SocialShareProps {
  url: string;
  title: string;
  excerpt: string;
}

const SocialShare = ({ url, title, excerpt }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const openShareWindow = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4" align="start">
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Share this article</h4>
          
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => openShareWindow(shareUrls.facebook)}
              className="flex items-center gap-2"
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              Facebook
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => openShareWindow(shareUrls.twitter)}
              className="flex items-center gap-2"
            >
              <Twitter className="w-4 h-4 text-sky-500" />
              Twitter
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => openShareWindow(shareUrls.linkedin)}
              className="flex items-center gap-2 col-span-2"
            >
              <Linkedin className="w-4 h-4 text-blue-700" />
              LinkedIn
            </Button>
          </div>
          
          <div className="pt-2 border-t">
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              className="w-full flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  Copied!
                </>
              ) : (
                <>
                  <Link2 className="w-4 h-4" />
                  Copy Link
                </>
              )}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SocialShare;
