import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
}

const useSEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
}: SEOProps) => {
  useEffect(() => {
    // --- Standard Meta Tags ---
    document.title = title;
    
    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    const setOgTag = (property: string, content: string) => {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // --- Canonical URL ---
    const canonicalUrl = `https://khelaghor.com/${window.location.hash}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // --- Open Graph (for Facebook, etc.) ---
    setOgTag('og:title', ogTitle || title);
    setOgTag('og:description', ogDescription || description);
    setOgTag('og:type', 'website');
    setOgTag('og:url', ogUrl || canonicalUrl);
    if (ogImage) {
        setOgTag('og:image', ogImage);
    }

    // --- Twitter Card ---
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    if (ogImage) {
        setMetaTag('twitter:image', ogImage);
    }

  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterCard]);
};

export default useSEO;
