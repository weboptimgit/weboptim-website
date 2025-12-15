import { useLocation } from "react-router-dom";
import { Language } from "@/contexts/LanguageContext";
import { blogPostsData } from "@/data/blog-posts";
import { staticPageSlugs, getBaseRouteFromSlug } from "@/config/domains";

// Hook to get slug mappings for the current page
export const useSlugMappings = (): Record<Language, string> | undefined => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  
  // Handle root path
  if (pathParts.length === 0) {
    return undefined; // Homepage doesn't need slug mapping
  }
  
  const firstSegment = pathParts[0];
  
  // Check if we're on a blog post page (has 2 segments like /blog/slug)
  const blogBaseRoute = getBaseRouteFromSlug(firstSegment);
  if (blogBaseRoute === "blog" && pathParts[1]) {
    const currentSlug = pathParts[1];
    
    // Find the blog post that matches any language's slug
    const blogPost = blogPostsData.find(
      (post) =>
        post.translations.EN.slug === currentSlug ||
        post.translations.CZ.slug === currentSlug ||
        post.translations.SK.slug === currentSlug
    );
    
    if (blogPost) {
      // Return full path including the translated blog segment
      return {
        EN: `${staticPageSlugs.blog.EN}/${blogPost.translations.EN.slug}`,
        CZ: `${staticPageSlugs.blog.CZ}/${blogPost.translations.CZ.slug}`,
        SK: `${staticPageSlugs.blog.SK}/${blogPost.translations.SK.slug}`,
      };
    }
  }
  
  // Check if we're on a glossary term page
  const glossaryBaseRoute = getBaseRouteFromSlug(firstSegment);
  if (glossaryBaseRoute === "glossary" && pathParts[1]) {
    const termSlug = pathParts[1];
    // Glossary term slugs stay the same across languages (e.g., "api", "cms")
    return {
      EN: `${staticPageSlugs.glossary.EN}/${termSlug}`,
      CZ: `${staticPageSlugs.glossary.CZ}/${termSlug}`,
      SK: `${staticPageSlugs.glossary.SK}/${termSlug}`,
    };
  }
  
  // Check if it's a static page (single segment like /contact, /kontakt, etc.)
  if (pathParts.length === 1) {
    const baseRoute = getBaseRouteFromSlug(firstSegment);
    if (baseRoute && staticPageSlugs[baseRoute]) {
      return staticPageSlugs[baseRoute];
    }
  }
  
  return undefined;
};
