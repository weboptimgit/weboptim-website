import { useLocation } from "react-router-dom";
import { Language } from "@/contexts/LanguageContext";
import { blogPostsData } from "@/data/blog-posts";

// Hook to get slug mappings for the current page
export const useSlugMappings = (): Record<Language, string> | undefined => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  
  // Check if we're on a blog post page
  if (pathParts[0] === "blog" && pathParts[1]) {
    const currentSlug = pathParts[1];
    
    // Find the blog post that matches any language's slug
    const blogPost = blogPostsData.find(
      (post) =>
        post.translations.EN.slug === currentSlug ||
        post.translations.CZ.slug === currentSlug ||
        post.translations.SK.slug === currentSlug
    );
    
    if (blogPost) {
      return {
        EN: blogPost.translations.EN.slug,
        CZ: blogPost.translations.CZ.slug,
        SK: blogPost.translations.SK.slug,
      };
    }
  }
  
  // TODO: Add similar logic for case studies, glossary terms, etc.
  // if (pathParts[0] === "case-studies" && pathParts[1]) { ... }
  
  return undefined;
};
